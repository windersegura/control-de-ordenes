import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductosManagerComponent } from './components/productos-manager/productos-manager.component';
import { ProductosEditComponent } from './components/productos-manager/productos-edit/productos-edit.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'catalogo', component:ProductosManagerComponent},
  {path:'edit-producto', component:ProductosEditComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'catalogo' }
];

export const app_routing = RouterModule.forRoot(routes); { }
