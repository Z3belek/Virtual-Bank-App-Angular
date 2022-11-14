import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixedTermComponent } from './fixed-term/fixed-term.component';

const routes: Routes = [
  {
    path: '',
    component: FixedTermComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixedTermRoutingModule { }
