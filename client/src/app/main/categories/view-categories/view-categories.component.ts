import {Component} from '@angular/core';
import {CategoriesService} from '../../../shared/services/categories.service';
import {Category} from '../../../shared/models';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent {
  categories$: Observable<Array<Category>>;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.categories$ = this.categoriesService.getAll();
  }

}
