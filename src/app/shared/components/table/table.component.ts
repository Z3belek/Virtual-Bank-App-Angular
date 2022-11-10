import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseServicesService } from '@core/services/base-service';
import { User } from '@core/model/interfaces';

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
                               'estado', 'fecha', 'hora', 'usuarioId', 'monto'];
  dataSource = new MatTableDataSource<Operaciones>(OPERATIONS_DATA);
  
  @ViewChild(MatPaginator) paginator:any = MatPaginator;
  
  constructor(
    private authService: AuthService,
    private base:BaseServicesService
  ) { }


  ngOnInit(): void{
    this.usuario();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }
  usuario(){
    this.base.getPerfil().subscribe(data => {
     this.dataUsuario = data
     console.log(this.dataUsuario)
    })
 }


}



const OPERATIONS_DATA: Operaciones[] = [
  {
    operacion: 'Transferencia',
    tipo: 'Egreso',
    estado: 'Aprobada',
    fecha: '01/11/2022',
    hora: '12:00',
    monto: '62000',
    usuarioId: '23436235'
  },
  {
    operacion: 'Transferencia',
    tipo: 'Ingreso',
    estado: 'Aprobada',
    fecha: '02/11/2022',
    hora: '12:00',
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
  }
];