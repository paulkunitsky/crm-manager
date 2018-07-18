import {Component, ContentChildren, Input, QueryList} from '@angular/core';
import {SwsTabsNameDirective} from '../sws-tabs-name.directive';
import {SwsTabsService} from '../sws-tabs.service';

@Component({
  selector: 'sws-tabs-content',
  templateUrl: './sws-tabs-content.component.html',
  styleUrls: ['./sws-tabs-content.component.css']
})
export class SwsTabsContentComponent {

  @Input() queryParamName: string;
  @ContentChildren(SwsTabsNameDirective) _tabs: QueryList<SwsTabsNameDirective>;

  constructor(public state: SwsTabsService) {
  }

  get tabs() {
    return this._tabs.toArray();
  }

  get activeTab() {
    return null;
  }

}
