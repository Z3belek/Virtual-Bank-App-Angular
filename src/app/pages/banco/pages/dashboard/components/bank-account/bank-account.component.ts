import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBankAccountComponent } from './components/add-bank-account/add-bank-account.component';
import { TransactionsService } from '@core/services/banco/transactions.service';
import { TransactionsComponent } from '@shared/components/formTransactions/transactions.component';

@Component({
  selector: 'ab-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss']
})
export class BankAccountComponent implements OnInit {
  openTab = 1;
  hideCurrency: boolean = false;
  constructor(
    public dialog: MatDialog,
    private modalSS: TransactionsService,
  ) { }

  
  //MODAL//
  modalRecargar(){
    this.modalSS.$modal.emit(true)
    this.dialog.open(TransactionsComponent)
  }

  modalTransferir(){
    this.modalSS.$modal.emit(false)
    this.dialog.open(TransactionsComponent)
  }



  ngOnInit(): void {
  }

  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

  showCurrencyFn() {
    this.hideCurrency = !this.hideCurrency;
  }

  addBankAccount() {
    this.dialog.open(AddBankAccountComponent);
  }
}