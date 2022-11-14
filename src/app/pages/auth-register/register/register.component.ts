import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegisterUser } from '@core/models/auth.model';
import * as Auth from '@core/services/auth/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { TermsComponent } from '../terms/terms.component';
@Component({
  selector: 'ab-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  termsAndConditions: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: this.passwordMatch('password', 'confirmPassword')
    })
  }

  passwordMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmPassword];

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

  register() {
    this.loading = true;
    const user: RegisterUser = {
      first_name: this.registerForm.value.first_name,
      last_name: this.registerForm.value.last_name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    }
    if (this.termsAndConditions === true) {
      if (this.registerForm.valid) {
        this.store.dispatch(Auth.RegisterSuccess({ user }))
      } else {
        return
      }
    }
  }

  terms() {
    this.dialog.open(TermsComponent, {
      width: '600px'
    })
  }
}
