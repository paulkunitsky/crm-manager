import {Component} from '@angular/core';
import {MainRoutes} from '../../shared/constants';
import {CategoriesService} from '../../shared/services/categories.service';
import {Category} from '../../shared/models';
import {Observable} from 'rxjs/Observable';

export class CategoriesRoutes {

}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  MainRoutes = MainRoutes;
  categories$: Observable<Array<Category>>;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.categories$ = this.categoriesService.getAll();
  }

}
