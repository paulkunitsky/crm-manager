import {Injectable} from '@angular/core';

declare var M;

@Injectable()
export class MaterialService {
  toast(message: string) {
    M.toast({html: message});
  }
}