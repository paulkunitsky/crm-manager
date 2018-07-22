import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabsComponent} from './tabs/tabs.component';
import {TabContentComponent} from './tab-content/tab-content.component';
import {TabHeaderComponent} from './tab-header/tab-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TabsComponent,
    TabContentComponent,
    TabHeaderComponent
  ],
  exports: [
    TabsComponent,
    TabContentComponent,
    TabHeaderComponent
  ]
})
export class TabsModule {
}
