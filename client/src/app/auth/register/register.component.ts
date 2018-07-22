import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';
import {MaterialService} from '../../shared/services/material.service';

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
    private router: Router,
    private material: MaterialService
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
    console.log('register init');
  }

  onSubmit(form) {
    form.disable();
    this.service
      .register(this.form.value)
      .subscribe(() => {
        this.router.navigate(['/auth/login'], {queryParams: {registered: true}});
      }, (error) => {
        form.enable();
        this.material.toast(error);
      });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
