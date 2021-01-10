import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductosManagerComponent } from './components/productos-manager/productos-manager.component';
import { ComprasManagerComponent } from './components/compras-manager/compras-manager.component';
import { ProductosListComponent } from './components/productos-manager/productos-list/productos-list.component';
import { ProductosEditComponent } from './components/productos-manager/productos-edit/productos-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlServiceService } from './services/control-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CatalogoComponent } from './components/productos-manager/catalogo/catalogo.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductosManagerComponent,
    ComprasManagerComponent,
    ProductosListComponent,
    ProductosEditComponent,
    NavBarComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSortModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,



  ],
  providers: [ControlServiceService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
