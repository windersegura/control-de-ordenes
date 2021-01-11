import { Component, Input, OnInit } from '@angular/core';
import { Marca, Producto, Catalogo } from '../../../model/control';
import { ControlServiceService } from '../../../services/control-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-productos-edit',
  templateUrl: './productos-edit.component.html',
  styleUrls: ['./productos-edit.component.scss']
})
export class ProductosEditComponent implements OnInit {

  marcas : Array<Marca>
  catalogos: Array<Catalogo>
  form : FormGroup
  producto: Producto
  @Input() is_new = true;
  @Input() productoEdit: Producto;
  


  constructor(
    private controlService:ControlServiceService,
    private fb: FormBuilder,
    private _snackbar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id:[null,[]],
      nombre: [null, [Validators.required]],
      precio: [null,[Validators.required]],
      marca: [null,[Validators.required]],
      catalogo: [null, []],
      catalogo_o:[null,[]]
    })
    
    
    this.loadMarca();
    this.loadCatalogos();


    if(this.productoEdit){
      this.producto = this.productoEdit
      this.form.patchValue(this.producto);
      console.log(this.producto);
    }
  }

  loadMarca(){
      this.controlService.getMarca().subscribe(data => {
        this.marcas = data
      }, err => {
        console.log(err);
      })
  }

  loadCatalogos(){
    this.controlService.listCatalogo().subscribe(data =>{
      this.catalogos = data
    }, err => {
      console.log(err);
    })
  }


  save(){
    this.producto = this.form.value
    console.log(this.producto);
    if(this.producto.id){
          this.controlService.updateProducto(this.producto).subscribe(data => {
            this._snackbar.open("Producto Actualizado", "Aceptar", {duration:2000})
        }, err =>{
          this._snackbar.open("Ocurrio un Error al Actualizar", "Aceptar", {duration:2000});
        })
    }else{
          this.controlService.createProducto(this.producto).subscribe(data => {
            this._snackbar.open("Producto Creado", "Aceptar", {duration:2000})
        }, err =>{
          this._snackbar.open("Ocurrio un Error al Guardar", "Aceptar", {duration:2000});
        })
    }
    
  }

}
