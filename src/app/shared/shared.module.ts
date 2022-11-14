import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertBarComponent } from './components/alert-bar/alert-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
],
exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
],
declarations: [
  AlertBarComponent
]
})
export class SharedModule { }
