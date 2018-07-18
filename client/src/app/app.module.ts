import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LocalStorageService} from './shared/services/local-storage.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './shared/services/auth.service';
import {AuthGuardService} from './shared/services/auth-guard.service';
import {HttpInterceptorsModule} from './shared/modules/http-interceptors/http-interceptors.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpInterceptorsModule
  ],
  providers: [
    LocalStorageService,
    AuthService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
