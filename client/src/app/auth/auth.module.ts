import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthComponent} from './auth.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SwsTabsModule} from '../shared/modules/sws-tabs/sws-tabs.module';
import {TestComponent} from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SwsTabsModule
    // FormsModule,
    // HttpClientModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    TestComponent
  ]
})
export class AuthModule {
}
