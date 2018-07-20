import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {MaterialService} from '../../shared/services/material.service';

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
    private route: ActivatedRoute,
    private material: MaterialService
  ) {
  }

  ngOnInit() {
    console.log('boye');
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    this.subscriptions.add(this.route.queryParams.subscribe(queryParams => {
      if (queryParams['registered']) {
        this.material.toast('Теперь вы можете зайти в систему используя свои данные');
      } else if (queryParams['accessDenied']) {
        this.material.toast('Для начала авторизируйтесь в системе');
      } else if (queryParams['sessionFailed']) {
        this.material.toast('Пожалуйста войдите в систему ещё раз');
      }
    }));
  }

  onSubmit(form) {
    this.form.disable();
    this.subscriptions.add(this.service
      .login(this.form.value)
      .subscribe(
        res => {
          this.router.navigate(['/main']);
        },
        (error) => {
          this.form.enable();
        }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
