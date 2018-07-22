import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {PositionsService} from '../../../../shared/services/positions.service';
import {Position} from '../../../../shared/models';
import {Subscription} from 'rxjs/Subscription';
import {MaterialModal, MaterialService} from '../../../../shared/services/material.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-positions-form',
  templateUrl: './positions-form.component.html',
  styleUrls: ['./positions-form.component.css']
})
export class PositionsFormComponent implements OnInit {

  positions: Array<Position>;
  @Input('categoryId') categoryId: string;
  @ViewChild('modal') modalRef: ElementRef;
  positionId = null;
  subs = new Subscription();
  modal: MaterialModal;
  loading = false;
  form: FormGroup;

  constructor(private positionsService: PositionsService, private material: MaterialService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      cost: new FormControl(null, [Validators.required, Validators.min(1)])
    });
    this.loading = true;
    this.subs.add(this.positionsService.getAllByCategoryId(this.categoryId).subscribe(positions => {
      this.positions = positions;
      this.loading = false;
    }, (error) => {
      this.loading = false;
    }));
  }

  onSubmit(form: FormGroup) {
    this.form.disable();
    const newPosition: Position = {
      name: form.value.name,
      cost: form.value.cost,
      categoryId: this.categoryId
    };
    if (this.positionId) {
      newPosition._id = this.positionId;
      this.subs.add(this.positionsService.updateOne(newPosition).subscribe((position) => {
          this.material.toast('Изменения сохранены');
          const index = this.positions.findIndex(pos => pos._id === position._id);
          this.positions[index] = position;
        }, (error) => this.material.toast(error.error.message),
        () => {
          this.modal.close();
          this.form.reset({name: null, cost: null});
          this.form.enable();
        }));
    } else {
      this.subs.add(this.positionsService.postOne(newPosition).subscribe((position) => {
        this.material.toast('Позиция создана');
        this.positions.push(position);
      }, (error) => {
      }, () => {
        this.modal.close();
        this.form.reset({name: null, cost: null});
        this.form.enable();
      }));
    }
  }

  ngAfterContentInit() {
    this.modal = this.material.initModal(this.modalRef);
  }

  ngOnDestroy() {
    this.modal.destroy();
    this.subs.unsubscribe();
  }

  onAddPosition() {
    this.positionId = null;
    this.form.reset({name: null, cost: null});
    this.modal.open();
    this.material.updateTextFields();
  }

  onDeletePosition(event, position: Position) {
    event.stopPropagation();
    const decision = window.confirm(`Удалить позицию ${position.name}?`);
    if (decision === true) {
      this.subs.add(this.positionsService.deleteOne(position).subscribe((response) => {
        const index = this.positions.findIndex(p => p._id === position._id);
        this.positions.splice(index, 1);
        this.material.toast(response.message);
      }, (error) => {
      }));
    }
  }

  onSelectPosition(position: Position) {
    this.positionId = position._id;
    this.modal.open();
    this.form.patchValue({name: position.name, cost: position.cost});
    this.material.updateTextFields();
  }

  closeModal() {
    this.modal.close();
  }
}
