import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  isNew = true;
  subscriptions = new Subscription();

  ngOnInit() {
    this.subscriptions.add(this.route.params.subscribe(params => {
      if (params['id']) {
        this.isNew = false;
      }
    }))
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
