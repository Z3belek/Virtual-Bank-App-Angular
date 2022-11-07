import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './components/alerts/alerts.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { AvatarComponent } from './components/avatar/avatar.component';


@NgModule({
  declarations: [
    AlertsComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    TituloComponent,
    DialogComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    TituloComponent,
    DialogComponent
  ]
})
export class SharedModule { }
