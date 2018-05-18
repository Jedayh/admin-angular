import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../_services/auth.service';
import { SocietyService } from '../../../_services/society.service';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Location } from '@angular/common';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Society } from '../../../models/society.model';

declare var $:any;

@Component({
  selector: 'app-societer',
  templateUrl: './societer.component.html',
  styleUrls: ['./societer.component.css']
})
export class SocieterComponent implements OnInit, AfterViewInit {

	societyList: Society[];
	public uid: string;


  constructor( private societyService: SocietyService, public flashMensaje: FlashMessagesService, public router: Router, private db: AngularFireDatabase, public authService: AuthService,private location : Location, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.authService.getAuth().subscribe( auth => {
        this.uid = auth.uid;
        this.db.list(`infos/${auth.uid}`).valueChanges().subscribe((profiles) => {
        if(profiles[0]['role'] != 'admin'){
        	this.db.list(`facture/${auth.uid}`).snapshotChanges().subscribe((factures) => {
        		this.societyList = [];
        		factures.forEach(res => {
        			let value = res.payload.toJSON();
        			value["$key"] = res.key;
		        	this.societyList.push(value as Society);
        		})
        	})
        }else{
          let allSociety = this.societyService.getAdminFact();
		      allSociety.snapshotChanges().subscribe(item => {
		      this.societyList = [];
		      item.forEach(element => {
		        let value = element.payload.toJSON();
		        value["$key"] = element.key;
		        this.societyList.push(value as Society);
		      });
		    });
        }
        
      })
  	});
  }
  ngAfterViewInit() {
    $('#example-table').DataTable({
        pageLength: 10,
    });
  }

}
