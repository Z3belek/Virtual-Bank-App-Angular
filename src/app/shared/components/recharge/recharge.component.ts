import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { depositToAccount } from '@core/models/account.model';
import { AccountService } from '@core/services/account/account.service';

@Component({
  selector: 'ab-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss']
})
export class RechargeComponent implements OnInit {
  rechargeForm!: FormGroup;
  depositMyAccount!: depositToAccount;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<RechargeComponent>,
    @Inject(MAT_DIALOG_DATA) private id: number
  ) { }

  ngOnInit(): void {
    this.rechargeForm = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.min(1)]],
    });
    setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }

  depositToMyAccount() {
    this.depositMyAccount = {
      type: 'topup',
      concept: 'Ingreso de dinero',
      amount: this.rechargeForm.value.amount
    };
    if (this.rechargeForm.valid) {
      this.accountService.depositToAccount(this.id, this.depositMyAccount)
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  }

}
