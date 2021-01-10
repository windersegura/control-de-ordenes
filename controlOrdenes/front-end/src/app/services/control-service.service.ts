import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Producto, Marca } from '../model/control';



@Injectable({
  providedIn: 'root'
})
export class ControlServiceService {

  constructor(
    private http: HttpClient,

  ) { }



  //login 
  login(params:any): Observable<any> {
    return this.http.post(`http://localhost:8000/token-auth/`, params);
  }


  setToken(token:string, user: any){
    localStorage.setItem("token",token);
    localStorage.setItem("user",JSON.stringify(user));
    
  }

  isLogged(){
    return !!(this.getToken());
  }

  isUser(){
    return this.getUser();
  }

  public getToken():string{
    //this.cookie.get("auth");
    return localStorage.getItem("auth");

  }

  public getUser():any {
    return localStorage.getItem("user");
  }




  //Marca

  getMarca(params?: any): Observable<Array<Marca>>{
    const url = `http://localhost:8000/control/marcas/`
    const options = {
      params: params
    }
    return this.http.get<Array<Marca>>(url,options)
  }

  //Productos
  getProductos(params?: any): Observable<Array<Producto>>{
    const url = `http://localhost:8000/control/productos/`
    const options = {
      params:params
    }
    return this.http.get<Array<Producto>>(url,options);
  }

  createProducto(params?:any):Observable<Producto>{
    const url = `http://localhost:8000/control/create-producto/`
    const options = {
      nombre: params.nombre,
      precio: params.precio,
      marca:params.marca
    }
    return this.http.post<Producto>(url,options)
  }

}
