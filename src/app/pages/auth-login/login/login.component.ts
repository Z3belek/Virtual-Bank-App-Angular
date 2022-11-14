import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, Observable } from 'rxjs';
import { LoginUser } from '@core/models/auth.model';
import { Store } from '@ngrx/store';
import * as Auth from '@core/services/auth/store/actions/auth.actions';
import * as Select from '@core/services/auth/store/selectors/auth.selectors';
import { MatDialog } from '@angular/material/dialog';
import { PasswordResetComponent } from '../password-reset/password-reset.component';

@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  checked = false;
  isLogged$!: Observable<any>;

  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.isLogged$ = this.store.select(Select.isLoggedSelector);
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    const user: LoginUser = this.loginForm.value;
    if (this.loginForm.valid) {
      this.loading = true;
      this.store.dispatch(Auth.LoginSuccess({ user }))
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }

  passwordReset() {
    this.dialog.open(PasswordResetComponent, {
      width: '400px',
    });
  }
}