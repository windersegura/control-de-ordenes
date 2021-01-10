import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ControlServiceService } from '../../services/control-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private controlService:ControlServiceService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
      
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }


  send() {
    let login = this.form.value;
    const params ={
      username: login.username,
      password: login.password
    }

    this.controlService.login(params).subscribe(data =>{
      this.controlService.setToken(data.token, data.user);
      //console.log(data);
      this._snackBar.open("Sesion Iniciada", "Aceptar", {duration:2000})
      this.router.navigateByUrl('/');
    },err =>{
      this._snackBar.open("Error al Inicial Sesion", "Aceptar", {duration:2000});
    }
    );
   
  }


}
