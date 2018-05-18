import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../_services/script-loader.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private _script: ScriptLoaderService, public router: Router, public authService: AuthService,private location : Location, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._script.load('./assets/js/scripts/dashboard_1_demo.js');
  }

}
