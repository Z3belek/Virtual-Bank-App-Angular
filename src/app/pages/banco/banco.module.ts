import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BancoRoutingModule } from './banco-routing.module';
import { MaterialModule } from '../../material/material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { UsuarioPerfilComponent } from './pages/usuario-perfil/usuario-perfil.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UsuarioPerfilComponent
  ],
  imports: [
    CommonModule,
    BancoRoutingModule,
    MaterialModule,
    NgChartsModule,
  ]
})
export class BancoModule { }