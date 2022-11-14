import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from '@core/guards/auth.guard';
import { AuthInverseGuard } from '@core/guards/auth-inverse.guard';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth-login/auth-login.module').then(m => m.AuthLoginModule),
    canActivate: [AuthInverseGuard],
    canLoad: [AuthInverseGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth-register/auth-register.module').then(m => m.AuthRegisterModule),
    canActivate: [AuthInverseGuard],
    canLoad: [AuthInverseGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/user-page/user-page.module').then(m => m.UserPageModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'fixed-term',
    loadChildren: () => import('./pages/fixed-term/fixed-term.module').then(m => m.FixedTermModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: '404',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
