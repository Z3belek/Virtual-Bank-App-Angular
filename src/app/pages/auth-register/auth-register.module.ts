import { NgModule } from '@angular/core';

import { AuthRegisterRoutingModule } from './auth-register-routing.module';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '@shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [

    RegisterComponent,
     TermsComponent
  ],
  imports: [
    SharedModule,
    AuthRegisterRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class AuthRegisterModule { }
