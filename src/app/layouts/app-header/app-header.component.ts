import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { Location } from '@angular/common';
import { AngularFireDatabase  } from 'angularfire2/database';

@Component({
  selector: '[app-header]',
  templateUrl: './app-header.component.html',
})
export class AppHeader implements OnInit {

  public firstName: string;

  constructor( public router: Router, private db: AngularFireDatabase, public authService: AuthService,private location : Location, private route: ActivatedRoute ) { }
  
  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if(auth){
          this.db.list(`infos/${auth.uid}`).valueChanges().subscribe((profiles) => {
              this.firstName = profiles[0]['first_name'];
          })
      }
    })
  }

  onClickLogout(){
  	this.authService.doLogout()
    .then((res) => {
      this.location.back();
      this.router.navigate(['/login']);
    }, (error) => {
      console.log("Logout error", error);
    });
  }

}
