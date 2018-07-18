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
   * @param {string} data
   */
  setItem(key: LocalStorageKeys, data: string): void {
    localStorage.setItem(key, data);
  }

  /**
   * Получение значения.
   * @param {LocalStorageKeys} key
   * @param {string} defaultValue
   * @returns {string | null}
   */
  getItem(key: LocalStorageKeys, defaultValue: string = null): string|null {
    let value = localStorage.getItem(key);
    return value ? value
                 : defaultValue;
  }

  /**
   * Проверка наличия значения.
   * @param {LocalStorageKeys} key
   * @param {string} defaultValue
   * @returns {string | null}
   */
  hasItem(key: LocalStorageKeys): boolean {
    return this.getItem(key) != null;
  }

}
