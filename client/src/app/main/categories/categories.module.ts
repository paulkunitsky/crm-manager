import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesRoutingModule} from './categories-routing.module';
import {LoadingModule} from '../../shared/modules/loading/loading.module';
import {ViewCategoryComponent} from './view-category/view-category.component';
import {ViewCategoriesComponent} from './view-categories/view-categories.component';
import {PositionsFormComponent} from './categories-form/positions-form/positions-form.component';
import {CategoriesFormComponent} from './categories-form/categories-form.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    LoadingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ViewCategoryComponent,
    ViewCategoriesComponent,
    PositionsFormComponent,
    CategoriesFormComponent,
    EditCategoryComponent
  ]
})
export class CategoriesModule {
}
