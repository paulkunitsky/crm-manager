import {Directive, Input, TemplateRef} from '@angular/core';
import {SwsTabsService} from './sws-tabs.service';

@Directive({
  selector: '[isDefault]'
})
export class SwsTabsNameDirective {
  @Input() public isDefault: string|number;

  constructor(public templateRef: TemplateRef<any>, public service: SwsTabsService) {
  }

  ngOnInit() {
    // this.service.registerTab(this.name, this.templateRef);
  }
}