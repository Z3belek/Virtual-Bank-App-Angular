import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Account, createOrModifyAccount } from '@core/models/account.model';
import { AccountService } from '@core/services/account/account.service';
import { ConfirmService } from '@core/services/confirm.service';
import { RechargeComponent } from '@shared/components/recharge/recharge.component';
import { TransferComponent } from '@shared/components/transfer/transfer.component';

@Component({
  selector: 'ab-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss']
})
export class BankAccountComponent implements OnInit {
  @Input() userId!: number;
  @Input() name!: string;
  openTab = 0;
  hideCurrency: boolean = true;
  myBanksAccounts: Account[] = [];
  createAccount!: createOrModifyAccount;

  constructor(
    private dialog: MatDialog,
    private accountService: AccountService,
    private confirmService: ConfirmService
  ) { }

  ngOnInit(): void {
    this.getMyAccounts();
  }

  showCurrency() {
    this.hideCurrency = !this.hideCurrency
  }

  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

  getMyAccounts() {
    this.accountService.getMyAccounts().subscribe((data: Account[]) => {
      this.myBanksAccounts = data;
    })
  }

  newAccount() {
    this.createAccount = {
      creationDate: new Date().toISOString(),
      money: 0,
      isBlocked: false,
      userId: this.userId
    }
    this.accountService.createAccount(this.createAccount)
    setTimeout(() => {
      this.getMyAccounts();
    }, 500);
  }

  rechargeMyAccount($accountId: number) {
    this.dialog.open(RechargeComponent, {
      width: '500px',
      data: $accountId
    });
  }

  transferToAccount(balance: number) {
    this.dialog.open(TransferComponent, {
      width: '500px',
      data: {
        balance: balance
      }
    });
  }

  deleteAccount(id: number) {
    this.confirmService.confirmDialog({
      title: `Eliminar cuenta bancaria`,
      message: `¿Estás seguro de que quieres eliminar esta cuenta bancaria?`,
      icon: 'heroicons_outline:trash',
      confirmCaption: 'Eliminar',
      cancelCaption: 'Cancelar'
    }).subscribe((result: boolean) => {
      if (result === true) {
        this.accountService.deleteAccount(id).subscribe(() => {
          this.getMyAccounts();
        })
      }
    });
  }
}
