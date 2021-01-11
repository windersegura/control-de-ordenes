import { Component, OnInit } from '@angular/core';
import { Catalogo, Producto } from '../../model/control';

@Component({
  selector: 'app-productos-manager',
  templateUrl: './productos-manager.component.html',
  styleUrls: ['./productos-manager.component.scss']
})
export class ProductosManagerComponent implements OnInit {
  modo = 1
  catalogo: Catalogo;
  producto: Producto;
  constructor() { }

  ngOnInit(): void {
  }


  selectCatalogo(catalogo:Catalogo){
    this.catalogo= new Catalogo(catalogo);
    this.modo= 2
  }

  selectProducto(producto:Producto){
    this.producto = new Producto(producto);
    this.modo = 3;
    
  }
}
