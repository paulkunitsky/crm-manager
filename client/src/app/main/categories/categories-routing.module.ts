import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewCategoryComponent} from './view-category/view-category.component';
import {ViewCategoriesComponent} from './view-categories/view-categories.component';
import {CategoriesFormComponent} from './categories-form/categories-form.component';
import {EditCategoryComponent} from './edit-category/edit-category.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: ViewCategoriesComponent},
  {path: 'new', component: CategoriesFormComponent},
  {path: ':id', component: CategoriesFormComponent},
  {path: ':id/edit', component: EditCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {
}
