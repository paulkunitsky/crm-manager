import {Injectable} from '@angular/core';

enum LocalStorageKeys {
  TOKEN = 'token'
}

/**
 * Сервис-обертка над localStorage.
 */
@Injectable()
export class LocalStorageService {

  keys = LocalStorageKeys;

  /**
   * Установка значения.
   * @param {LocalStorageKeys} key
   * @param {any} data
   */
  setItem(key: LocalStorageKeys, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  /**
   * Получение значения.
   * @param {LocalStorageKeys} key
   * @param {string} any
   * @returns {any}
   */
  getItem(key: LocalStorageKeys, defaultValue: any = null): any {
    const value = JSON.parse(localStorage.getItem(key));
    return value || defaultValue;
  }

  /**
   * Проверка наличия значения.
   * @param {LocalStorageKeys} key
   * @returns {boolean}
   */
  hasItem(key: LocalStorageKeys): boolean {
    return this.getItem(key) !== null;
  }

}
