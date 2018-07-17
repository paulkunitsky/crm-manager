import {Component, ContentChildren, Input, QueryList} from '@angular/core';
import {SwsTabsNameDirective} from '../sws-tabs-name.directive';

@Component({
  selector: 'sws-tabs-panel',
  templateUrl: './sws-tabs-panel.component.html',
  styleUrls: ['./sws-tabs-panel.component.css']
})
export class SwsTabsPanelComponent {

  @Input() queryParamName: string;
  @ContentChildren(SwsTabsNameDirective) _tabs: QueryList<SwsTabsNameDirective>;

  get tabs() {
    return this._tabs.toArray();
  }

  get activeTab() {
    return this._tabs.toArray().find(tab => tab.active === true);
  }

  changeTab(tabName) {
    for (const tab of this.tabs) {
      tab.active = tab.name === tabName;
    }
  }

}
