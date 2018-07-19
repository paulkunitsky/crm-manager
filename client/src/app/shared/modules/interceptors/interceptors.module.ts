import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {InterceptTokenService} from './intercept-token.service';
import {InterceptErrorsService} from './intercept-errors.service';

@NgModule({
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptTokenService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: InterceptErrorsService, multi: true},
  ]
})
export class InterceptorsModule {
}
