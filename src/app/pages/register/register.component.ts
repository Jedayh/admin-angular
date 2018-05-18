import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../../_services/register.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  registerUserForm: FormGroup;
  errorMessage: string = '';
  constructor(public router: Router, private formBuilder: FormBuilder, public registerService: RegisterService, private tostr: ToastrService) { }

  ngOnInit() {
    this.registerUserForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      adresse: [null, Validators.required],
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      society_name: [null, Validators.required],
      role: ['client', Validators.required],
      activation: ['off', Validators.required],
      
    });
    
  }
  registerUser(value){
    this.registerService.Register(value)
     .then(res => {
       this.errorMessage = "Adresse email déja existant";
     }, err => {
       this.errorMessage = err.message;
     })
  }

}
