import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/model/control';
import { ControlServiceService } from '../../../services/control-service.service';
import {MatPaginator} from '@angular/material/paginator';
import { EventEmitter } from '@angular/core';
import { Catalogo } from '../../../model/control';

 

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  dataSource = new MatTableDataSource();

  displayedColumns = ['nombre', 'tipo', 'vendedor', 'acciones'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Output() selectCatalogo: EventEmitter<Catalogo> = new EventEmitter();

  constructor(
      private controlService:ControlServiceService,
  ) { }

  ngOnInit(): void {
    this.listCatalogo();
  }


  listCatalogo(){
    this.controlService.listCatalogo().subscribe(data => {
      
      this.dataSource = new MatTableDataSource<any>(data)
      this.dataSource.paginator = this.paginator
    })
  }


  emitirCatalogo(row)
  {
    this.selectCatalogo.emit(row);
  }


  

}
