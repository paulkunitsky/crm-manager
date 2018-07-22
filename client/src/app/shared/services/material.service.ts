import {ElementRef, Injectable} from '@angular/core';

declare var M;

export interface MaterialModal {
  open?(): void
  close?(): void
  destroy?(): void
}

@Injectable()
export class MaterialService {
  toast(message: string) {
    M.toast({html: message});
  }

  initFloatingButton(ref: ElementRef) {
    M.FloatingActionButton.init(ref.nativeElement);
  }

  updateTextFields() {
    M.updateTextFields();
  }

  initModal(ref: ElementRef): MaterialModal {
    return M.Modal.init(ref.nativeElement);
  }
}