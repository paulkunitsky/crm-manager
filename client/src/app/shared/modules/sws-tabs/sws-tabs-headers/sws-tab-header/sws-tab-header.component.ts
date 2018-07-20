import {Component, HostBinding, HostListener, Input} from '@angular/core';

@Component({
  selector: 'sws-tab-header',
  templateUrl: './sws-tab-header.component.html',
  styleUrls: ['./sws-tab-header.component.scss'],
  host: {
    'class': 'sws-tabs__header'
  }
})
export class SwsTabHeaderComponent {

  /**
   * changeTab is set by parent
   */
  changeTab: Function;

  @Input() name: string;

  @HostListener('click') onClick() {
    this.changeTab(this.name);
  };

  @HostBinding('class.active') active = false;

}
