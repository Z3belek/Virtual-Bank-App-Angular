import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '@core/services/account/account.service';
import { UserService } from '@core/services/user/user.service';
import { TransactionService } from '@core/services/transaction/transaction.service';
import { User } from '@core/models/user.model';
import { Account, depositToAccount } from '@core/models/account.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createOrModifyTransaction } from '@core/models/transaction.model';

@Component({
  selector: 'ab-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  transferForm!: FormGroup;
  allAccounts: Account[] = [];
  transactionAccount!: createOrModifyTransaction;
  accountTransfer!: depositToAccount;
  balanceInAccount!: number;
  selectedConcept!: string;
  contactType: boolean = this.data.contact;
  allConcepts = [
    { value: 'Transferencia' },
    { value: 'Pago de servicios' },
    { value: 'Pago de tarjeta' },
    { value: 'Pago de préstamo' },
    { value: 'Pago de seguro' },
    { value: 'Pago de colegiatura' },
    { value: 'Pago de impuestos' },
    { value: 'Pago de renta' },
    { value: 'Pago de nómina' },
    { value: 'Pago de pensiones' },
    { value: 'Pago de otros' },
  ]
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private userService: UserService,
    public dialogRef: MatDialogRef<TransferComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.balanceInAccount = data.balance;
  }

  ngOnInit(): void {
    this.transferForm = this.formBuilder.group({
      toAccountId: [{value: '', disabled: this.data.contact}, [Validators.required ] ],
      amount: ['', [Validators.required, Validators.minLength(1)]],
      concept: ['', [Validators.required]]
    });
    if (this.data.contact === true) {
      this.transferForm.controls['toAccountId'].setValue(this.data.userId);
    }
  }

  transferToAccount() {
    this.accountTransfer = {
      amount: this.transferForm.value.amount,
      concept: this.transferForm.value.concept,
      type: 'payment'
    };
    if (this.balanceInAccount < this.transferForm.value.amount) {
      alert('No tienes suficiente dinero para realizar esta transacción');
    } else {
      this.accountService.depositToAccount(this.transferForm.value.toAccountId, this.accountTransfer)
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  };
}

