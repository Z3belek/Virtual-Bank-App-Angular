import { Component, OnInit } from '@angular/core';
import { TransactionService } from '@core/services/transaction/transaction.service';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { Transaction } from '@core/models/transaction.model';

@Component({
  selector: 'ab-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  transactionData: Transaction[] = [];
  incomeMoney: number[] = [];
  outflowMoney: number[] = [];
  months: string[] = [];
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: this.months,
    datasets: [
      {
        data: this.incomeMoney,
        label: 'Ingreso de dinero',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      },
      {
        data: this.outflowMoney,
        label: 'Egreso de dinero',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(0,0,255,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;
  
  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.filterAllMonths();
    this.filterToPupOrPayment();
  }

  filterAllMonths(): void {
    this.transactionService.getAllTransactions().subscribe((data: any) => {
      this.transactionData = data.data;
      for (let i = 0; i < this.transactionData.length; i++) {
        const date = new Date(this.transactionData[i].date);
        const month = date.toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase() + date.toLocaleString('default', { month: 'long' }).slice(1);
        if(this.months.indexOf(month) === -1) {
          this.months.push(month);
        }
      }
    })
  }

  filterToPupOrPayment(): void {
    this.transactionService.getAllTransactions().subscribe((data: any) => {
      this.transactionData = data.data;
      for (let i = 0; i < this.transactionData.length; i++) {
        if(this.transactionData[i].type === 'topup') {
          this.incomeMoney.push(this.transactionData[i].amount * 1);
        } else {
          this.outflowMoney.push(this.transactionData[i].amount * 1);
        }
      }
    })
  }

}