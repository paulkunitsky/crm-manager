import {Component, ContentChildren, Input, QueryList} from '@angular/core';
import {TabContentComponent} from '../tab-content/tab-content.component';
import {TabHeaderComponent} from '../tab-header/tab-header.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  @Input() queryParamName: string;
  @ContentChildren(TabHeaderComponent) _headers: QueryList<TabHeaderComponent>;
  @ContentChildren(TabContentComponent) _contents: QueryList<TabContentComponent>;
  subs = new Subscription();
  get headers() { return this._headers ? this._headers.toArray() : []; }
  get contents() { return this._contents ? this._contents.toArray() : []; }

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngAfterContentInit() {
    if (this.queryParamName) {
      for (const header of this.headers) {
        header.changeTabByName = (name) => {
          this.router.navigate([], {queryParams: {[this.queryParamName]: name}})
        };
      }
      this.route.queryParams.subscribe(queryParams => {
        const name = queryParams[this.queryParamName];
        if (name === undefined && this.contents[0]) {
          this.contents[0].active = true;
          return;
        }
        for (const header of this.headers) {
          header.active = header.name == name;
        }
        for (const content of this.contents) {
          content.active = content.name == name;
        }
      })
    }
  }
}
