
export interface iMarca {
    id: string;
    marca: string

}

export class Marca implements iMarca{
    id: string;
    marca: string;

    constructor(marca: Marca){
        if(marca){
            this.id = marca.id;
            this.marca = marca.marca;
        }else{
            this.id = null;
            this.marca = null;
        }
    }
}



export interface iProducto {
    id:string;
    nombre:string;
    precio: number;
    marca: any;
}

export class Producto implements iProducto{
    id:string;
    nombre:string;
    precio: number;
    marca: any;

    constructor(producto:Producto){
        if (producto) {
            this.id = producto.id;
            this.nombre = producto.nombre;
            this.precio = producto.precio;
            this.marca = producto.marca;
            
        } else {
            this.id = null;
            this.nombre = null;
            this.precio = null;
            this.marca = null;
            
        }
    }

}