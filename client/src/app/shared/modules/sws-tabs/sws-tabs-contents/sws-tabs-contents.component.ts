import {Component, ContentChildren, Input, QueryList, ViewChild, ViewContainerRef} from '@angular/core';
import {SwsTabContentComponent} from './sws-tab-content/sws-tab-content.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'sws-tabs-contents',
  templateUrl: './sws-tabs-contents.component.html',
  styleUrls: ['./sws-tabs-contents.component.scss'],
  host: {
    'class': 'sws-tabs__content-wrapper'
  }
})
export class SwsTabsContentsComponent {
  subscriptions = new Subscription();
  @Input() queryParamName: string;
  @ContentChildren(SwsTabContentComponent) _components: QueryList<SwsTabContentComponent>;
  @ViewChild('container') container: ViewContainerRef;

  get components(): Array<SwsTabContentComponent> {
    return this._components ? this._components.toArray() : [];
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  /**
   * grab all the contents
   * prevent them from mounting
   * mount only active one
   */

  ngAfterContentInit() {
    const that = this;
    if (this.queryParamName) {
      this.subscriptions.add(this.route.queryParams
        .subscribe(queryParams => {
          const name = queryParams[this.queryParamName];
          if (name !== undefined) {
            for (const component of this.components) {
              const active: boolean = name == component.name;
              component.active = active;
              if (active) {
                that.container.createEmbeddedView(component.template);
              }
            }
          } else {
            this.components[0].active = true;
            this.components[0].mounted = true;
          }
        })
      );
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
