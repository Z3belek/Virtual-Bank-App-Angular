import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as Auth from '@core/services/auth/store/actions/auth.actions';

@Component({
  selector: 'ab-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  resetForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
  ) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      userId: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: this.passwordMatch('password', 'passwordConfirm')
    });
  }

  passwordMatch(password: string, passwordConfirm: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[passwordConfirm];

      if (matchingControl.errors && !matchingControl.errors['passwordMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ passwordMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  resetPassword() {
    if (this.resetForm.valid) {
      this.store.dispatch(Auth.ResetPasswordSuccess({
        id: this.resetForm.value.userId,
        password: this.resetForm.value.password
      }));
    }
  }
}
