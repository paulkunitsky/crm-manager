import {ElementRef, Injectable} from '@angular/core';

declare var M;

@Injectable()
export class MaterialService {
  toast(message: string) {
    M.toast({html: message});
  }

  initFloatingButton(ref: ElementRef) {
    M.FloatingActionButton.init(ref.nativeElement);
  }
}