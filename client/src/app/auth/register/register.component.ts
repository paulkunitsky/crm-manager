import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';
import {AuthRoutes} from '../auth-routing.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  subscriptions = new Subscription();

  constructor(
    private service: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit(form) {
    form.disable();
    this.service
      .register(this.form.value)
      .subscribe(() => {
        this.router.navigate([AuthRoutes.LOGIN], {queryParams: {registered: true}});
      }, () => {
        form.enable();
      });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
