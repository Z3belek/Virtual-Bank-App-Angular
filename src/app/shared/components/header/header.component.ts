import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@core/model/interfaces';
import { BaseServicesService } from '@core/services/base-service';
import { navbarData } from '../navigation';
import { Store } from '@ngrx/store';
import * as Auth from '../../../auth/auth-store/auth.actions/auth.actions';
import * as Select from '../../../auth/auth-store/auth.selectors/auth.selectors';
import { Observable } from 'rxjs';


@Component({
  selector: 'ab-header',
  templateUrl: './header.component.html'
})


export class HeaderComponent implements OnInit {
  navbarData = navbarData;
  // isLoggedIn: boolean = false
  sidebarOpen: boolean = false;
  dataUsuario!: User;
  fullName!: string[]
  isLoggedIn$: Observable<any>;
  ngOnInit(): void {
    setTimeout(() => {
      this.usuario()
    }, 6000*50);

  }

  constructor(private router: Router,
    private base: BaseServicesService,
    private activate: ActivatedRoute,
    private store: Store<any>) {
    this.isLoggedIn$ = this.store.select(Select.isLoggedSelector);
    this.dataUsuario = { id: 0, first_name: '', last_name: '', email: '', password: '', roleId: 0, points: 0 }

  }

  usuario() {
    // if (this.isLoggedIn) {
      this.base.getPerfil().subscribe(data => {
        this.dataUsuario = data
      })
    // }
  }

  logout() {
    this.store.dispatch(Auth.Logout())
    // localStorage.removeItem('user')
    // this.router.navigate(['auth/login']).then(() => {
    //   window.location.reload();
    // });
  }

  showSideBar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
