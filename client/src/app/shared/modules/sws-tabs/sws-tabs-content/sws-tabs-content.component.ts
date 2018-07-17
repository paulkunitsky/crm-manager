import {Component, ContentChildren, Input, QueryList} from '@angular/core';
import {SwsTabsNameDirective} from '../sws-tabs-name.directive';

@Component({
  selector: 'sws-tabs-content',
  templateUrl: './sws-tabs-content.component.html',
  styleUrls: ['./sws-tabs-content.component.css']
})
export class SwsTabsContentComponent {

  @Input() queryParamName: string;
  @ContentChildren(SwsTabsNameDirective) _tabs: QueryList<SwsTabsNameDirective>;

  get tabs() {
    return this._tabs.toArray();
  }

  get activeTab() {
    return this._tabs.toArray().find(tab => tab.active === true);
  }

}
