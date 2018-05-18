import { Injectable } from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database'

import { AuthService } from './auth.service';

@Injectable()
export class SocietyService {

  societyList: AngularFireList<any>;
  societyListAdmin: AngularFireList<any>;

  constructor( public authService: AuthService, private firebase: AngularFireDatabase ) { }
  
  // getData(){
  //   this.societyList = this.firebase.list(`facture/${.uid}`);
  //   return this.societyList;
  // }

   getAdminFact(){
    this.societyListAdmin = this.firebase.list('admin-facture');
    return this.societyListAdmin;
  }

  insertFacture( value )
  {
    let $factRef = this.firebase.list(`facture/${value.uid}/`).push({ 
    	Ref_facture: value.invoice_name, 
    	Montant: value.ammont, 
    	Ref_client: value.client_ref, 
      Desc: value.description
    	 })
    return $factRef.key
  }

  insertFactAdmin( value )
  {
    let $factAdmin = this.firebase.list(`admin-facture/`).push({ 
      Ref_facture: value.invoice_name, 
      Montant: value.ammont, 
      Ref_client: value.client_ref, 
      Desc: value.description
       })
    return $factAdmin.key
  }
  
}
 