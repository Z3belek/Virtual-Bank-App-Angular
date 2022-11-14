import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'ab-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData
    ) { }

  ngOnInit(): void {
  }

}

export interface ConfirmDialogData {
  title: string;
  icon: string;
  message: string;
  confirmCaption: string;
  cancelCaption: string;
}