import {Directive, Input, TemplateRef} from '@angular/core';
import {SwsTabsService} from './sws-tabs.service';

@Directive({
  selector: '[name]'
})
export class SwsTabsNameDirective {
  @Input() public name: string|number;

  constructor(public templateRef: TemplateRef<any>, public service: SwsTabsService) {
  }

  ngOnInit() {
    this.service.registerTab(this.name, this.templateRef);
  }
}