import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from '../../../shared/services/categories.service';
import {of} from 'rxjs/internal/observable/of';
import {switchMap} from 'rxjs/operators';
import {MaterialService} from '../../../shared/services/material.service';
import {Category} from '../../../shared/models';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent {

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private material: MaterialService,
    private router: Router,
  ) {
  }

  isNew = true;
  subscriptions = new Subscription();
  form: FormGroup;
  image: File;
  imagePreview = '';
  category: Category;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required)
    });
    this.form.disable();
    this.route.params.pipe(
      switchMap((params) => {
        if (params['id'] !== undefined && params['id'] !== null) {
          this.isNew = false;
          return this.categoriesService.getOneById(params['id']);
        }
        return of(null);
      })
      )
      .subscribe(category => {
        if (category) {
          this.category = category;
          this.form.patchValue({name: category.name});
          this.material.updateTextFields();
          this.imagePreview = category.imageSrc;
        }
        this.form.enable();
      }, error => {
        this.material.toast(error.error.message);
        this.form.enable();
      });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onFileUploadButtonClick(fileInput) {
    fileInput.click();
  }

  onFileUpload(event) {
    this.image = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.image);
  }

  onSubmit(form) {
    let data$;
    form.disable();
    if (this.isNew) {
      // create
      data$ = this.categoriesService.postOne(this.form.value.name, this.image);
    } else {
      // update
      data$ = this.categoriesService.update(this.category._id, this.form.value.name, this.image ? this.image : null);
    }
    data$.subscribe((category) => {
      this.category = category;
      this.material.toast('Изменения успешно сохранены');
      this.form.enable();
    }, (error) => {
      let message;
      if (error.error && error.error.message) {
        message = error.error.message
      } else {
        message = error.toString();
      }
      this.material.toast(message);
      this.form.enable();
    })
  }

  deleteCategory() {
    const decision = window.confirm(`Вы уверены что хотите удалить "${this.category.name}"`);
    if (decision) {
      this.categoriesService.delete(this.category._id).subscribe(
        (res) => this.material.toast(res.message),
        (error) => this.material.toast(error),
        () => this.router.navigate(['/main/categories'])
      );
    }
  }

  delete(id: string): Observable<any> {
    return this.categoriesService.delete(id);
  }

}
