import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwsTabsHeadersComponent} from './sws-tabs-headers/sws-tabs-headers.component';
import {SwsTabHeaderComponent} from './sws-tabs-headers/sws-tab-header/sws-tab-header.component';
import {SwsTabsContentsComponent} from './sws-tabs-contents/sws-tabs-contents.component';
import {SwsTabContentComponent} from './sws-tabs-contents/sws-tab-content/sws-tab-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [
    SwsTabsHeadersComponent,
    SwsTabHeaderComponent,
    SwsTabsContentsComponent,
    SwsTabContentComponent
  ],
  exports: [
    SwsTabsHeadersComponent,
    SwsTabHeaderComponent,
    SwsTabsContentsComponent,
    SwsTabContentComponent
  ]
})
export class SwsTabsModule {
}
