import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FixedTermService } from '@core/services/fixed-term/fixed-term.service';
import { FixedTerm, FixedTermWithInterest } from '@core/models/fixed-term.model';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmService } from '@core/services/confirm.service';
@Component({
  selector: 'ab-ft-table',
  templateUrl: './ft-table.component.html',
  styleUrls: ['./ft-table.component.scss']
})
export class FtTableComponent implements OnInit {
  dataSource!:MatTableDataSource<FixedTermWithInterest[]>
  displayedColumns: string[] = ['amount', 'creation_date', 'closing_date', 'interestGained', 'delete'];

  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator
  constructor(
    private fixedTermService: FixedTermService,
    private confirmService: ConfirmService
  ) {
    this.fixedTermService.getAllMyFixedTerms().subscribe((fixedTerms: any) => {
      this.dataSource = new MatTableDataSource(fixedTerms.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
  }

  calculateInterest(fixedTerms: FixedTerm[]) {
    let interestGained = 0;
    fixedTerms.forEach((fixedTerm: FixedTerm) => {
      interestGained += fixedTerm.amount * 0.05;
    });
    return interestGained;
  }

  deleteFixedTerm(id: number) {
    this.confirmService.confirmDialog({
      title: 'Eliminar plazo fijo',
      message: '¿Está seguro que desea eliminar el plazo fijo?',
      icon: 'heroicons_outline:trash',
      confirmCaption: 'Eliminar',
      cancelCaption: 'Cancelar'
    }).subscribe((result: boolean) => {
      if (result === true) {
        this.fixedTermService.deleteFixedTerm(id).subscribe((res: any) => {
          this.fixedTermService.getAllMyFixedTerms().subscribe((fixedTerms: any) => {
            this.dataSource = new MatTableDataSource(fixedTerms.data);
            this.dataSource.paginator = this.paginator;
          });
        });
      }
    });
  }

}
