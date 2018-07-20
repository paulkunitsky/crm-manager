import {Component, ContentChildren, Input, QueryList} from '@angular/core';
import {SwsTabHeaderComponent} from './sws-tab-header/sws-tab-header.component';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'sws-tabs-headers',
  templateUrl: './sws-tabs-headers.component.html',
  styleUrls: ['./sws-tabs-headers.component.scss'],
  host: {
    'class': 'sws-tabs__headers'
  }
})
export class SwsTabsHeadersComponent {
  subscriptions = new Subscription();

  @Input() queryParamName: string;
  @ContentChildren(SwsTabHeaderComponent) _components: QueryList<SwsTabHeaderComponent>;

  get components(): Array<SwsTabHeaderComponent> {
    return this._components ? this._components.toArray() : [];
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngAfterContentInit() {
    if (this.queryParamName) {
      for (const component of this.components) {
        component.changeTab = this.changeTab.bind(this);
      }

      this.subscriptions.add(this.route.queryParams.subscribe(queryParams => {
        const name = queryParams[this.queryParamName];
        if (name !== undefined) {
          for (const component of this.components) {
            component.active = component.name == name;
          }
        }
      }));
    }
  }

  changeTab(tabName) {
    this.router.navigate([], {queryParams: {[this.queryParamName]: tabName}});
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
