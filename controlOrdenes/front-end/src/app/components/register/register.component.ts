import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ControlServiceService } from '../../services/control-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private controlService: ControlServiceService
  ) { }

  ngOnInit(): void {
   
    this.form = this.fb.group({
      username: [null,[]],
      password: [null,[]],
      name: [null,[]],
      apellido: [null,[]]
    })

  }

}
