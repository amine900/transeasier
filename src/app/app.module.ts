import { CommunityComponent } from './community/community.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule} from "@angular/fire";
import { AngularFireDatabaseModule} from "@angular/fire/database";
import { AngularFirestoreModule} from "@angular/fire/firestore";
import { AngularFireAuthModule} from "@angular/fire/auth";
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PwdResetComponent } from './pwd-reset/pwd-reset.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './sign-in/login/login.component';
import { RegisterComponent } from './sign-in/register/register.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { OverviewComponent } from './edit-profile/overview/overview.component';
import { PasswordComponent } from './edit-profile/password/password.component';
import { AddressComponent } from './edit-profile/address/address.component';
import { HistoryComponent } from './edit-profile/history/history.component';
import { NotificationsComponent } from './edit-profile/notifications/notifications.component';
import { TestComponent } from './test/test.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    SignInComponent,
    AppComponent,
    CommunityComponent,
    PwdResetComponent,
    LoginComponent,
    RegisterComponent,
    EditProfileComponent,
    OverviewComponent,
    PasswordComponent,
    AddressComponent,
    HistoryComponent,
    NotificationsComponent,
    TestComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
