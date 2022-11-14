import { NgModule } from '@angular/core';

import { FixedTermRoutingModule } from './fixed-term-routing.module';
import { FixedTermComponent } from './fixed-term/fixed-term.component';
import { SharedModule } from '@shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { FtTableComponent } from './ft-table/ft-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ConfirmDialogModule } from '@shared/components/confirm-dialog/confirm-dialog.module';

@NgModule({
  declarations: [
    FixedTermComponent,
    FtTableComponent
  ],
  imports: [
    SharedModule,
    FixedTermRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    ConfirmDialogModule
  ]
})
export class FixedTermModule { }
