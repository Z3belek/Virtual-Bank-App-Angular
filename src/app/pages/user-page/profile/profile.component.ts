import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user/user.service';
import { User } from '@core/models/user.model';

@Component({
  selector: 'ab-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData!: User;

  constructor(
    private userService: UserService
  ) {
    this.userData = {
      id: 0,
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      roleId: 0,
      points: 0
    } as User;
  }

  ngOnInit(): void {
    this.userService.getUserData().subscribe((user: User) => {
      this.userData = user;
    });
  }
}
