import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase  } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class RegisterService {

  constructor(
   public afAuth: AngularFireAuth,
   private db: AngularFireDatabase,
   public flashMensaje: FlashMessagesService,
   public router: Router,
   private tostr: ToastrService
 ){}


  Register( value ){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        this.db.list(`infos/${res.uid}`).push({ 
        	first_name : value.first_name, 
        	last_name: value.last_name,
        	society_name: value.society_name,
          adresse: value.adresse,
          role: value.role,
        	activation: value.activation,
        	 })
          this.tostr.success('Submitted Succcessfully', 'Compte créer avec succès, en atent d\'activation');
      }, err => reject(err))
    })
  }

}
