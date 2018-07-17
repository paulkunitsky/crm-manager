import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwsTabsPanelComponent} from './sws-tabs-panel/sws-tabs-panel.component';
import {SwsTabsContentComponent} from './sws-tabs-content/sws-tabs-content.component';
import {SwsTabsNameDirective} from './sws-tabs-name.directive';
import {SwsTabsService} from './sws-tabs.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SwsTabsService
  ],
  declarations: [
    SwsTabsContentComponent,
    SwsTabsPanelComponent,
    SwsTabsNameDirective
  ],
  exports: [
    SwsTabsContentComponent,
    SwsTabsPanelComponent,
    SwsTabsNameDirective
  ]
})
export class SwsTabsModule {
}
