import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'sws-tab-content',
  templateUrl: './sws-tab-content.component.html',
  styleUrls: ['./sws-tab-content.component.scss'],
})
export class SwsTabContentComponent implements OnInit {

  mounted = false;
  active = false;
  @Input() name: string;
  @ContentChild(TemplateRef) template: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }
}
