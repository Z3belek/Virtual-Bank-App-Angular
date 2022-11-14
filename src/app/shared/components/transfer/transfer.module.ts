import { NgModule } from '@angular/core';
import { TransferComponent } from './transfer.component';
import { SharedModule } from '@shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    TransferComponent
  ],
  imports: [
    SharedModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports: [
    TransferComponent
  ]
})
export class TransferModule { }
