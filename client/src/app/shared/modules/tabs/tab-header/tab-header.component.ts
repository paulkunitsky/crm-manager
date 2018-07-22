import {Component, HostListener, Input} from '@angular/core';

@Component({
  selector: 'tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.css']
})
export class TabHeaderComponent {
  @Input() name: string;
  active = false;
  changeTabByName: Function;
  @HostListener('click') onClick() {
    this.changeTabByName(this.name);
  }
}
