import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../_services/auth.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  public isLogin: boolean;
  public email: string;
  public logo: string;
  public uid: string;
  public name: string;

  constructor(public router: Router, private formBuilder: FormBuilder, public authService: AuthService) {}

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if(auth){
        this.isLogin = true;
          this.email = auth.email;
          this.uid = auth.uid;
          this.name = auth.displayName;
      }else{
        this.isLogin = false;
          this.router.navigate(['/login']);
      }
    })
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      society: [null, Validators.required],
      adresse: [null, Validators.required],
      role: [null, Validators.required],
      
    });
  }

  tryRegister(value){
    this.authService.doRegister(value)
     .then(res => {
       this.errorMessage = "";
       this.successMessage = "Your account has been created";
       this.router.navigate(['/login']);
     }, err => {
       console.log(err);
       this.errorMessage = err.message;
       this.successMessage = "";
     })
  }


}
