import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {AppRoutes} from '../../app-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  subscriptions = new Subscription();
  form: FormGroup;

  constructor(
    private service: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    this.subscriptions.add(this.route.queryParams.subscribe(queryParams => {
      if (queryParams['registered']) {

      } else if (queryParams['accessDenied']) {

      }
    }));
  }

  onSubmit(form) {
    this.form.disable();
    this.subscriptions.add(this.service
      .login(this.form.value)
      .subscribe(res => {
        this.router.navigate([AppRoutes.OVERVIEW])
      }, (error) => {
        this.form.enable();
      }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
