import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module'; 

@Component({
  selector: 'ab-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
titulo: string = "Esto es un Dialog"
longText: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Donec rutrum sit amet eros ac scelerisque. Duis dolor tellus, commodo nec orci nec,
  tristique mattis purus. Proin tempus, turpis eu dignissim lacinia, est massa dictum
  tortor, et tristique sem diam nec diam. Donec et est felis. Cras ornare suscipit
  nisl, quis elementum est.`
  constructor() { }

  ngOnInit(): void {
  }

}
