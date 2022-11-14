import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'ab-alert-bar',
  templateUrl: './alert-bar.component.html',
  styleUrls: ['./alert-bar.component.scss']
})
export class AlertBarComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: AlertBarData
    ) { }

  ngOnInit(): void {
  }

}

export interface AlertBarData {
  icon: string;
  message: string;
  class: string;
}