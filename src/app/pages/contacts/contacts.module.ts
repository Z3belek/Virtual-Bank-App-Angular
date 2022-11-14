import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactComponent } from './contact/contact.component';
import { TransferModule } from '@shared/components/transfer/transfer.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    TransferModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    TransferModule,
    MatDialogModule
  ]
})
export class ContactsModule { }
