import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthComponent} from './auth.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TestComponent} from './test/test.component';
import {TabsModule} from '../shared/modules/tabs/tabs.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    TabsModule,
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
