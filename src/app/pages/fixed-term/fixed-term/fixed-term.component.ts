import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '@core/services/account/account.service';
import { Account } from '@core/models/account.model';
import { FixedTermService } from '@core/services/fixed-term/fixed-term.service';
import { createOrModifyFixedTerm } from '@core/models/fixed-term.model';

@Component({
  selector: 'ab-fixed-term',
  templateUrl: './fixed-term.component.html',
  styleUrls: ['./fixed-term.component.scss']
})
export class FixedTermComponent implements OnInit {
  fixedTerm!: FormGroup;
  allMyAccounts: Account[] = [];
  newFixedTerm!: createOrModifyFixedTerm;
  minDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 1
  ) ;
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private fixedTermService: FixedTermService
  ) { }

  ngOnInit(): void {
    this.fixedTerm = this.formBuilder.group({
      accountId: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.minLength(1)]],
      closing_date: ['', [Validators.required]],
    });
    this.myAccounts();
  }

  myAccounts() {
    this.accountService.getMyAccounts().subscribe((accounts) => {
      this.allMyAccounts = accounts;
    });
  }

  createFixedTerm() {
    this.newFixedTerm = {
      userId: this.allMyAccounts[0].userId,
      accountId: this.fixedTerm.value.accountId,
      amount: this.fixedTerm.value.amount,
      creation_date: new Date().toISOString().slice(0, 10),
      closing_date: this.fixedTerm.value.closing_date.toISOString().slice(0, 10),
    }
    if (this.fixedTerm.valid) {
      this.accountService.detailedAccount(this.newFixedTerm.accountId).subscribe((account: Account) => {
        if (this.newFixedTerm.amount < account.money) {
          this.fixedTermService.createFixedTerm(this.newFixedTerm)
        } else {
          console.log('No tienes suficiente dinero en la cuenta');
        }
      });
    }
  }
}
