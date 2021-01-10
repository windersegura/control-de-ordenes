import { Component, OnInit } from '@angular/core';
import { Marca, Producto } from '../../../model/control';
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
  form : FormGroup
  producto: Producto
  is_new = true;


  constructor(
    private controlService:ControlServiceService,
    private fb: FormBuilder,
    private _snackbar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: [null, [Validators.required]],
      precio: [null,[Validators.required]],
      marca: [null,[Validators.required]]
    })

    
    this.loadMarca();
  }

  loadMarca(){
      this.controlService.getMarca().subscribe(data => {
        this.marcas = data
      })
  }


  save(){
    this.producto = this.form.value
    this.controlService.createProducto(this.producto).subscribe(data => {
        this._snackbar.open("Producto Creado", "Aceptar", {duration:2000})
    }, err =>{
      this._snackbar.open("Ocurrio un Error al Guardar", "Aceptar", {duration:2000});
    })
  }

}
