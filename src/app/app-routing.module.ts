import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LayoutComponent } from './/layouts/layout.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { ColorsComponent } from './pages/ui/colors/colors.component';
import { UsersComponent } from './pages/ui/users/users.component';
import { AddSocieterComponent } from './pages/ui/add-societer/add-societer.component';
import { AddUserComponent } from './pages/ui/add-user/add-user.component';
import { SocieterComponent } from './pages/ui/societer/societer.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { Error500Component } from './pages/error-500/error-500.component';



const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {
        "path": "",
        "component": LayoutComponent,
        "children": [
            {
                path: "index",
                component: HomeComponent
            },
            {
                path: "ui/users",
                component: UsersComponent
            },
            {
                path: "ui/societer",
                component: SocieterComponent
            },
            {
                path: "ui/add-user",
                component: AddUserComponent
            },
            {
                path: "ui/add-societer",
                component: AddSocieterComponent
            },
            {
                path: "profile",
                component: ProfileComponent
            }
        ]
    },
    {
        "path": "login",
        "component": LoginComponent
    },
    {
        "path": "register",
        "component": RegisterComponent
    },
    {
        "path": "error_404",
        "component": Error404Component
    },
    {
        "path": "error_500",
        "component": Error500Component
    },
    {
        "path": "**",
        "redirectTo": "error_404",
        "pathMatch": "full"
    },
];

@NgModule({
  declarations: [
    HomeComponent,
    Error404Component,
    Error500Component,
    LoginComponent

  ],
  imports: [ 
  RouterModule.forRoot(routes), 
  FormsModule,
  ReactiveFormsModule,
  HttpModule
  ],
  exports: [ 
    RouterModule,
  ]
})

export class AppRoutingModule { }
