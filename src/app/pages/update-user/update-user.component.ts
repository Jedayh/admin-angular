import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { AuthService } from '../../_services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor( public authService: AuthService, private tostr: ToastrService) { }

  ngOnInit() {

  }
  onSubmit(authForm: NgForm) {
    this.authService.updateUser(authForm.value);
    this.tostr.success('Submitted Succcessfully', 'Compte activation ok');
  }

}
