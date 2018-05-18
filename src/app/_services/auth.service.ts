import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../models/user.model';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  userList: AngularFireList<any>;
  selectedUser: User = new User();

  constructor(
   public afAuth: AngularFireAuth,
   private db: AngularFireDatabase,
 ){}


  doRegister( value ){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        this.db.list(`infos/${res.uid}`).push({ society : value.society, adresse: value.adresse, role: value.role })
      }, err => reject(err))
    })
  }

  doLogin(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  doLogout(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        this.afAuth.auth.signOut()
        resolve();
      }
      else{
        reject();
      }
    });
  }
  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }
  updateUser(user : User){
    this.db.list(`infos/${user.$userId}`).update(user.$key,
    {
        role: user.role,
        activation: user.activation,
    });
  }

  updateCurentUser(user : User){
    this.db.list(`infos/${user.$userId}`).update(user.$key,
    {
        first_name: user.first_name,
        last_name: user.last_name,
    });
  }

  getData(){
    this.userList = this.db.list('infos');
    return this.userList;
  }


}
