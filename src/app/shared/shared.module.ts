import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './components/alerts/alerts.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { TransactionsComponent } from './components/formTransactions/transactions.component';
import { TableComponent } from './components/table/table.component';
import { ListTransactionComponent } from './components/listTransaction/list-transaction.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AlertsComponent,
    HeaderComponent,
    FooterComponent,
    TituloComponent,
    DialogComponent,
    AvatarComponent,
    TransactionsComponent,
    TableComponent,
    ListTransactionComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TituloComponent,
    DialogComponent,
    TableComponent,
    ListTransactionComponent
  ]
})
export class SharedModule { }
