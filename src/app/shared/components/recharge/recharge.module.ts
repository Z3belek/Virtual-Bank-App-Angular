import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '@shared/shared.module';
import { RechargeComponent } from './recharge.component';



@NgModule({
  declarations: [
    RechargeComponent
  ],
  imports: [
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    RechargeComponent
  ]
})
export class RechargeModule { }
