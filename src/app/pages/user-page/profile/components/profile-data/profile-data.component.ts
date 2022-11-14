import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ab-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent implements OnInit {
  @Input() id!: number;
  @Input() email!: string;
  @Input() points!: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
