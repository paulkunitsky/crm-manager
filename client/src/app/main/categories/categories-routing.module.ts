import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateCategoryComponent} from './create-category/create-category.component';
import {ViewCategoryComponent} from './view-category/view-category.component';
import {ViewCategoriesComponent} from './view-categories/view-categories.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: ViewCategoriesComponent},
  {path: 'new', component: CreateCategoryComponent},
  {path: ':id', component: ViewCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {
}
