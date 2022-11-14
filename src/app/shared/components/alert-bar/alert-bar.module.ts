import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBarComponent } from './alert-bar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AlertBarComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    AlertBarComponent
  ]
})
export class AlertBarModule { }
