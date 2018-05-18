import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../../_services/auth.service';
import { SocietyService } from '../../../_services/society.service';

@Component({
  selector: 'app-add-societer',
  templateUrl: './add-societer.component.html',
  styleUrls: ['./add-societer.component.css']
})
export class AddSocieterComponent implements OnInit {

  societyForm: FormGroup;
  errorMessage: string = '';

  public uid: string;
  public isLogin: boolean;
  public qrcode: string;
  value: string;
  constructor(public router: Router, private formBuilder: FormBuilder, public authService: AuthService, private societyService: SocietyService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.uid = auth.uid;
        this.societyForm = this.formBuilder.group({
          invoice_name: [null, Validators.required],
          ammont: [null, Validators.required],
          client_ref: [null, Validators.required],
          description: [null, Validators.required],
          uid: [this.uid],
          
        });
      } else {
        this.isLogin = false;
        this.router.navigate(['/login']);
      }
    });
  }
  trySociety(value){
    this.qrcode = this.societyService.insertFacture( value );
    this.societyService.insertFactAdmin( value );
  }

}
