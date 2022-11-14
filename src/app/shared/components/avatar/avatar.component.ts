import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Select from '@core/services/auth/store/selectors/auth.selectors';

@Component({
  selector: 'ab-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  @Input() name!: string[];
  @Input() responsiveIcon: boolean = false;
  showInitials: boolean = true;
  circleColor!: string;
  initials!: string;
  private colors = [
    '#EB7181',
    '#468547',
    '#FFD558',
    '#3670B2'
  ]

  constructor(private store: Store<any>) {
    this.isLoggedIn$ = this.store.select(Select.isLoggedSelector);
  }

  ngOnInit(): void {
    this.circleColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    setTimeout(() => {
      this.initials = this.name.map(name => name.charAt(0)).join('');
    }, 1000);
  }

}
