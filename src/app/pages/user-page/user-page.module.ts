import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageRoutingModule } from './user-page-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { BankAccountComponent } from './profile/components/bank-account/bank-account.component';
import { ProfileDataComponent } from './profile/components/profile-data/profile-data.component';
import { LineChartComponent } from './profile/components/line-chart/line-chart.component';
import { PieChartComponent } from './profile/components/pie-chart/pie-chart.component';
import { TransactionsComponent } from './profile/components/transactions/transactions.component';
import { NgChartsModule } from 'ng2-charts';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { TransferModule } from '@shared/components/transfer/transfer.module';
import { RechargeModule } from '@shared/components/recharge/recharge.module';
import { ConfirmDialogModule } from '@shared/components/confirm-dialog/confirm-dialog.module';

@NgModule({
  declarations: [
    ProfileComponent,
    BankAccountComponent,
    ProfileDataComponent,
    LineChartComponent,
    PieChartComponent,
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    NgChartsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatTableModule,
    TransferModule,
    RechargeModule,
    ConfirmDialogModule
  ]
})
export class UserPageModule { }
