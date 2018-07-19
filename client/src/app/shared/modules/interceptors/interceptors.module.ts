import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {InterceptTokenService} from './intercept-token.service';
import {InterceptErrorService} from './intercept-error.service';

@NgModule({
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptTokenService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: InterceptErrorService, multi: true},
  ]
})
export class InterceptorsModule {
}
