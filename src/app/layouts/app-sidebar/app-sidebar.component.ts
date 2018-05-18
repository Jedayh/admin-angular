import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Location } from '@angular/common';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: '[app-sidebar]',
  templateUrl: './app-sidebar.component.html'
})
export class AppSidebar implements OnInit {
  public isLogin: boolean;
	public email: string;
  public uid: string;
  public adrs: string;
  public firstName: string;
  public roleUser: string;
	public activ: string;

  constructor( private tostr: ToastrService, 
               public flashMensaje: FlashMessagesService, 
               public router: Router, 
               private db: AngularFireDatabase, 
               public authService: AuthService, 
               private location : Location, 
               private route: ActivatedRoute
              ) { }

  ngOnInit() {
  	this.authService.getAuth().subscribe( auth => {
     if(auth){
        this.isLogin = true;
          this.email = auth.email;
          this.uid = auth.uid;
          this.db.list(`infos/${auth.uid}`).valueChanges().subscribe((profiles) => {
            if(profiles[0]['activation'] != true){
              this.tostr.warning('Submitted warning', 'Compte en attente d\'activation');
              this.router.navigate(['/login']);

            }else{
              this.adrs = profiles[0]['adresse'];
              this.firstName = profiles[0]['first_name'];
              this.roleUser = profiles[0]['role'];
            }
            
          })
      }else{
        this.isLogin = false;
          this.router.navigate(['/login']);
      }
  	})
  }
}
