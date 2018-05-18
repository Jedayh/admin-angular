import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { NgxSmartModalModule } from '../ngx-smart-modal';

import { ToastrModule } from 'ngx-toastr';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { HttpModule } from '@angular/http';
import { AppComponent } from './/app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LayoutModule } from './/layouts/layout.module';
import { ScriptLoaderService } from './_services/script-loader.service';
import { AuthService } from './_services/auth.service';
import { RegisterService } from './_services/register.service';
import { AuthGuard } from './_services/auth.guard';
import { UserService } from './_services/user.service';
import { SocietyService } from './_services/society.service';
import { UsersComponent } from './pages/ui/users/users.component';
import { SocieterComponent } from './pages/ui/societer/societer.component';
import { AddUserComponent } from './pages/ui/add-user/add-user.component';
import { ColorsComponent } from './pages/ui/colors/colors.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';


import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { AddSocieterComponent } from './pages/ui/add-societer/add-societer.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SocieterComponent,
    AddUserComponent,
    FieldErrorDisplayComponent,
    ColorsComponent,
    ColorsComponent,
    RegisterComponent,
    ProfileComponent,
    AddSocieterComponent,
    UpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    NgxQRCodeModule,
    FlashMessagesModule,
    ToastrModule.forRoot(),
    NgxSmartModalModule.forRoot()

  ],
  providers: [ AuthService, ScriptLoaderService, AuthGuard, UserService, SocietyService, RegisterService, FlashMessagesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
