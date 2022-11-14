import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Account } from '@core/models/account.model';
import { User } from '@core/models/user.model';
import { AccountService } from '@core/services/account/account.service';
import { UserService } from '@core/services/user/user.service';
import { TransferComponent } from '@shared/components/transfer/transfer.component';

@Component({
  selector: 'ab-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  userData!: User;
  myBanksAccounts: Account[] = [];
  balance: number = 0
  displayedColumns: string[] = ['first_name', 'email', 'enviar'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  dataSource!: MatTableDataSource<User[]>;
  constructor(
    private userService: UserService,
    private accountService: AccountService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.userService.getUserData().subscribe((user: User) => {
      this.userData = user;
    });
    this.getAllUsers();
    this.getMyAccounts();
  }

  getMyAccounts() {
    this.accountService.getMyAccounts().subscribe((data: Account[]) => {
      this.myBanksAccounts = data;
      this.balance = this.myBanksAccounts[0].money;
    })
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res: any) => {
      const { data, nextPage } = res;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  transferTo(contactId: number) {
    this.dialog.open(TransferComponent, {
      width: '500px',
      data: {
        balance: this.balance,
        contact: true,
        userId: contactId
      }
    });
  }
}
