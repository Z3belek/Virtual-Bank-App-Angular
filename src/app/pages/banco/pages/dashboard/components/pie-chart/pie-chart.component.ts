import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Transactions } from '@core/model/interfacesTransactions';
import { Accounts } from '@core/model/user.data';
import { UserDataService } from '@core/services/user-data.service';
import { ChartOptions } from 'chart.js';
@Component({
  selector: 'ab-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
datos:any
  constructor(private accountS:UserDataService) { }

  public pieChartOptions: ChartOptions<'doughnut'> = {
    responsive: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          textAlign: 'left',
        },
      }
    }
  };

  public pieChartLabels = ['Compras','Servicios', 'Restaurantes y bares' ];
  public pieChartData = [ {
    data: [  ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  ngOnInit(): void {
    this.getAcount()
  }

  getAcount(){
    this.accountS.getTransactions().subscribe((data2:any)=>{
      const{data} = data2
      this.datos=data
      this.datos=this.datos.map((dta:any)=>dta.amount)
      this.pieChartData.push({data:this.datos})
      console.log(this.datos)
      console.log(this.pieChartData[1].data)
      
    })
  }

}
