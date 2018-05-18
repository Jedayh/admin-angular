import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { ScriptLoaderService } from '../../_services/script-loader.service';
import { AuthService } from '../../_services/auth.service';

import { AngularFireDatabase  } from 'angularfire2/database';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit, AfterViewInit {

  public firstName: string;
  public lastName: string;
  public role: string;
  public uid: string;
  public profileUrl: string;
  constructor(private _script: ScriptLoaderService, private db: AngularFireDatabase, public authService: AuthService, private tostr: ToastrService) { }

  ngOnInit() {
  	  this.authService.getAuth().subscribe( auth => {
      if(auth){
      	  this.uid = auth.uid;
          this.db.list(`infos/${auth.uid}`).valueChanges().subscribe((profiles) => {
              this.firstName = profiles[0]['first_name'];
              this.lastName = profiles[0]['last_name'];
              this.role = profiles[0]['role'];
              this.role = profiles[0]['role'];
          })
      }
    })
  }

  ngAfterViewInit() {
    this._script.load('./assets/js/scripts/profile-demo.js');
  }

}
