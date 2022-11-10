import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseServicesService } from '@core/services/base-service';
import { User } from '@core/model/interfaces';
import { LiveAnnouncer } from '@angular/cdk/a11y';

export interface Operaciones {
  operacion: string;
  tipo: string;
  estado: string;
  fecha: string;
  hora: string;
  usuarioId: string;
  monto: string;
}



@Component({
  selector: 'ab-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit {

  title:string = "Listado genérico"

  dataUsuario:User = {
    id:0,
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    points:0,
    roleId:0
  }

  displayedColumns: string[] = ['operacion', 'tipo',
                               'estado', 'fecha', 'hora', 'monto'];
  dataSource = new MatTableDataSource<Operaciones>(OPERATIONS_DATA);
  
 
  
  constructor(
    private authService: AuthService,
    private base:BaseServicesService,
    private _liveAnnouncer: LiveAnnouncer
  ) { }

  @ViewChild(MatPaginator) paginator:any = MatPaginator;
  @ViewChild(MatSort) sort:any =  MatSort;
  ngOnInit(): void{
    this.usuario();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }
  usuario(){
    this.base.getPerfil().subscribe(data => {
     this.dataUsuario = data
     console.log(this.dataUsuario)
    })
 }

 eventSortChange(sortState: Sort){
  if(sortState.direction){
    this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  } else {
    this._liveAnnouncer.announce('Sorting cleared');
  }
 }


}



const OPERATIONS_DATA: Operaciones[] = [
  {
    operacion: 'Transferencia',
    tipo: 'Egreso',
    estado: 'Aprobada',
    fecha: '01/12/2022',
    hora: '01:00',
    monto: '62050',
    usuarioId: '23436235'
  },
  {
    operacion: 'Debito',
    tipo: 'Egreso',
    estado: 'Aprobada',
    fecha: '02/11/2022',
    hora: '14:00',
    monto: '1000',
    usuarioId: '73253'
  },
  {
    operacion: 'Transferencia',
    tipo: 'Ingreso',
    estado: 'Aprobada',
    fecha: '03/11/2022',
    hora: '12:00',
    monto: '72344',
    usuarioId: '7235234'
  },
  {
    operacion: 'Credito',
    tipo: 'Egreso',
    estado: 'En proceso',
    fecha: '01/12/2022',
    hora: '01:00',
    monto: '60000',
    usuarioId: '23436239'
  },
  {
    operacion: 'Transferencia',
    tipo: 'Egreso',
    estado: 'Aprobada',
    fecha: '01/12/2021',
    hora: '01:00',
    monto: '6200',
    usuarioId: '2343635'
  },
  {
    operacion: 'Transferencia',
    tipo: 'Egreso',
    estado: 'Aprobada',
    fecha: '01/2/2022',
    hora: '01:00',
    monto: '7500',
    usuarioId: '236235'
  },
  {
    operacion: 'Transferencia',
    tipo: 'Egreso',
    estado: 'Aprobada',
    fecha: '20/12/2022',
    hora: '01:00',
    monto: '25000',
    usuarioId: '234356'
  },
];