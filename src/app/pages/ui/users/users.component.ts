import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthService } from '../../../_services/auth.service';
import { SocietyService } from '../../../_services/society.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { User } from '../../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UsersComponent implements OnInit {

	userList: User[];
	public uid: string;
  public show:boolean = false;

  constructor( private db: AngularFireDatabase, public authService: AuthService ) { }

  ngOnInit() {
  	this.authService.getAuth().subscribe( auth => {
        this.uid = auth.uid;
        this.db.list(`infos/${auth.uid}`).valueChanges().subscribe((profiles) => {
        if(profiles[0]['role'] != 'admin'){
        	
        }else{
           let elmnt = this.authService.getData();
            elmnt.snapshotChanges().subscribe(item => {
            this.userList = [];
            item.forEach(element => {
              let value: any = element.payload.toJSON();
              let key = Object.keys(value)[0];
              value[key].$key = key;
              value["$key"] = element.key;
              value[key].$userId = value.$key;
              let data = value[key];
              this.userList.push(data as User);
            });
          }); 
        }
        
      })
  	});
  }
  onEdit(use: User) {
    this.show = !this.show;
    if(this.show){
      this.authService.selectedUser = Object.assign({}, use);
    }
  	
  }

}
