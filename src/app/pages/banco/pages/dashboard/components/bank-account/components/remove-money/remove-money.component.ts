import { Component, OnInit } from '@angular/core';

//Importaciones
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionsService } from '@core/services/banco/transactions.service';
import {MatDatepickerModule} from '@angular/material/datepicker'; 

@Component({
  selector: 'ab-remove-money',
  templateUrl: './remove-money.component.html',
  styleUrls: ['./remove-money.component.scss'],
})
export class RemoveMoneyComponent implements OnInit {

  retirarDinero: FormGroup = new FormGroup ({});

  constructor(public modalSS:TransactionsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.retirarDinero = this.formBuilder.group({
      monto: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      concepto: ['', [Validators.required]]
    })
  }

  removeMoney(){
    const {monto, fecha, concepto} = this.retirarDinero.value
    const verData: any = {
      amount: monto,
      concept: concepto,
      date: fecha
    }

    this.modalSS.postTransaction(verData).subscribe((data)=>{
      console.log(data)
    })

  }

}
