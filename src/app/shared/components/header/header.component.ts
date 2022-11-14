import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@core/services/user/user.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { navbarData } from '../navigation';
import * as Auth from '@core/services/auth/store/actions/auth.actions';
import * as Select from '@core/services/auth/store/selectors/auth.selectors';
import { User } from '@core/models/user.model';
import { LocalStorageService } from '@core/services/auth/local-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'ab-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarData = navbarData
  isLoggedIn$: Observable<any>;
  sidebarOpen: boolean = false;
  userData!: User;

  constructor(
    private router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private localStorage: LocalStorageService,
    private dialog: MatDialog,
    private store: Store<any>
  ) {
    this.userData = {id: 0, first_name: '', last_name: '', email: '', password: '', roleId: 0, points: 0,}
    this.isLoggedIn$ = this.store.select(Select.isLoggedSelector);
  }

  ngOnInit(): void {
    if(this.localStorage.getToken(this.userData)) {
      this.user()
    } else {
      setTimeout(() => {
        this.user()
      }, 6000 * 50)
    }
  }

  user() {
    this.userService.getUserData().subscribe((user: User) => {
      this.userData = user
    })
  }

  logout() {
    this.store.dispatch(Auth.Logout())
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  editProfile() {
    this.dialog.open(EditProfileComponent, {
      data: this.userData,
      width: '400px'
    })
  }
}