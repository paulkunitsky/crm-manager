import {Component, ContentChildren, Input, QueryList} from '@angular/core';
import {SwsTabsNameDirective} from '../sws-tabs-name.directive';
import {SwsTabsService} from '../sws-tabs.service';

@Component({
  selector: 'sws-tabs-panel',
  templateUrl: './sws-tabs-panel.component.html',
  styleUrls: ['./sws-tabs-panel.component.css']
})
export class SwsTabsPanelComponent {

  @Input() queryParamName: string;
  @ContentChildren(SwsTabsNameDirective) _tabs: QueryList<SwsTabsNameDirective>;

  constructor(public service: SwsTabsService) {
  }

  get tabs() {
    return this._tabs.toArray();
  }

}
