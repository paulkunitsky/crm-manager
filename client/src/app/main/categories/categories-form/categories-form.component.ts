import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from '../../../shared/services/categories.service';
import {of} from 'rxjs/internal/observable/of';
import {switchMap} from 'rxjs/operators';
import {MaterialService} from '../../../shared/services/material.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent {

  constructor(private route: ActivatedRoute, private categoriesService: CategoriesService, private material: MaterialService) {
  }

  isNew = true;
  subscriptions = new Subscription();
  form: FormGroup;
  file: File;
  imagePreview = '';

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required)
    });
    this.form.disable();
    this.route.params.pipe(
      switchMap((params) => {
        if (params['id']) {
          this.isNew = false;
          return this.categoriesService.getOneById(params['id']);
        }
        return of(null);
      })
      )
      .subscribe(category => {
        if (category) {
          this.form.patchValue({name: category.name});
          this.material.updateTextFields();
        }
      }, error => {
        this.material.toast(error.error.message);
      }, () => {
        this.form.enable();
      });
  }

  onFileUploadButtonClick(fileInput) {
    fileInput.click();
  }

  onFileUpload(event) {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.file);
  }

  onSubmit(form) {
    form.disable();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
