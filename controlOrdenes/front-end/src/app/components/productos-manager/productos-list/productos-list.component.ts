import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/model/control';
import { ControlServiceService } from '../../../services/control-service.service';
import {MatPaginator} from '@angular/material/paginator';
import { Catalogo } from '../../../model/control';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.scss']
})
export class ProductosListComponent implements OnInit {

  dataSource = new MatTableDataSource();
  @Input() catalogo:Catalogo;

  displayedColumns = ['producto', 'precio', 'marca', 'acciones'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Output() selecProducto : EventEmitter<Producto> = new EventEmitter();
  

  constructor(
    private controlService:ControlServiceService,
    private _snacBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.loadProductos();
    //console.log(this.catalogo);
  }


  productoEdit(row){
    this.selecProducto.emit(row);
  }

  deleteProducto(row, index){
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription();
    this.controlService.deleteProducto(row).subscribe(data => {
          this._snacBar.open("Producto Eliminado", "Aceptar", {duration:2000});
          this.loadProductos();
          
    }, err => {
        console.log(err);
    })
    
  }

  loadProductos(){
    const params = {
      catalogo: this.catalogo.id
    }
    this.controlService.getProductos(params).subscribe(data => {
    
      this.dataSource = new MatTableDataSource<Producto>(data)
      this.dataSource.paginator = this.paginator;
    })
  }

}
