import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LocalStorageService} from './shared/services/local-storage.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './shared/services/auth.service';
import {AuthGuardService} from './shared/services/auth-guard.service';
import {MaterialService} from './shared/services/material.service';
import {CategoriesService} from './shared/services/categories.service';
import {InterceptorsModule} from './shared/modules/interceptors/interceptors.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InterceptorsModule,
  ],
  providers: [
    LocalStorageService,
    AuthService,
    AuthGuardService,
    MaterialService,
    CategoriesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
