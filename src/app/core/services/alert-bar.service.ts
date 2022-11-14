import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertBarService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  // confirmDialog(data: ConfirmDialogData): Observable<boolean> {
  //   return this.dialog
  //     .open(ConfirmDialogComponent, {
  //       data,
  //       disableClose: true
  //     })
  //     .afterClosed();
  // }

  alertBar() {}

}
