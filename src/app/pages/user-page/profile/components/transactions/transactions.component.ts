import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '@core/models/transaction.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TransactionService } from '@core/services/transaction/transaction.service';
import { Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';
import * as Transactions from '@core/services/transaction/store/actions/transaction.actions';
import * as SelectTransactions from '@core/services/transaction/store/selectors/transaction.selectors';
@Component({
  selector: 'ab-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TransactionsComponent implements OnInit {
  dataSource: any = [];
  TransactionList$!: Observable<any>;
  displayedColumns: string[] = ['concept', 'amount', 'date'];
  columnsToDisplayWithExpand = ['concept', 'amount', 'date', 'expand'];
  expandedElement!: Transaction | null;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private transactionService: TransactionService,
    private store: Store<any>
  ) {
    this.TransactionList$ = this.store.select(SelectTransactions.dataTransaction);
    this.store.dispatch(Transactions.getAllTransactionsSuccess());
  }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.transactionService.getAllTransactions().subscribe((transactions: any) => {
      this.dataSource = new MatTableDataSource(transactions.data);
    });
  }

}
