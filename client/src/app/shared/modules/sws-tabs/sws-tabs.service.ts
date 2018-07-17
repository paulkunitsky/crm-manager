import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SwsTabsService {

  public tabs = new BehaviorSubject([]);

  constructor() {
  }

  /**
   * Общение с роутером
   * Инициализция каждой табы
   * Переключение активной табы
   */

  registerTab(name, templateRef) {
    const tabs = this.tabs.getValue();
    const notRegistered: boolean = tabs.findIndex(tab => tab.name === name) === -1;
    if (notRegistered) {
      tabs.push({name, templateRef});
      this.tabs.next(tabs);
    }
  }

  changeTabByName(name) {
    const tabs = this.tabs.getValue();
    for (const tab of this.tabs) {
      tab.
    }
  }

}
