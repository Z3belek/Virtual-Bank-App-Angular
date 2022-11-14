import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { IconsModule } from '@core/icons/icons.module';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  imports: [
    IconsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    IconsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule
  ]
})
export class HeaderModule { }
