import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/model/control';
import { ControlServiceService } from '../../../services/control-service.service';
import {MatPaginator} from '@angular/material/paginator';



@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.scss']
})
export class ProductosListComponent implements OnInit {

  dataSource = new MatTableDataSource();

  displayedColumns = ['producto', 'precio', 'marca', 'acciones'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  constructor(
    private controlService:ControlServiceService
  ) { }

  ngOnInit(): void {
    this.loadProductos();
  }


  loadProductos(){
    this.controlService.getProductos().subscribe(data => {
    
      this.dataSource = new MatTableDataSource<Producto>(data)
      this.dataSource.paginator = this.paginator;
    })
  }

}
