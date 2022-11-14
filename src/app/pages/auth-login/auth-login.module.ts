import { NgModule } from '@angular/core';

import { AuthLoginRoutingModule } from './auth-login-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '@shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { PasswordResetComponent } from './password-reset/password-reset.component';

@NgModule({
  declarations: [
    LoginComponent,
    PasswordResetComponent
  ],
  imports: [
    SharedModule,
    AuthLoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class AuthLoginModule { }
