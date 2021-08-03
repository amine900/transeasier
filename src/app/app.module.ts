import { CommunityComponent } from './community/community.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PublicTransitComponent } from './public-transit/public-transit.component';
import { BusComponent } from './public-transit/bus/bus.component';
import { TgmComponent } from './public-transit/tgm/tgm.component';
import { MetroComponent } from './public-transit/metro/metro.component';
import { MapsComponent } from './maps/maps.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { OverviewComponent } from './edit-profile/overview/overview.component';
import { PasswordComponent } from './edit-profile/password/password.component';
import { AddressComponent } from './edit-profile/address/address.component';
import { HistoryComponent } from './edit-profile/history/history.component';
import { NotificationsComponent } from './edit-profile/notifications/notifications.component';
import { LoginComponent } from './sign-in/login/login.component';
import { RegisterComponent } from './sign-in/register/register.component';
import { AngularFireModule} from "@angular/fire";
import { AngularFireDatabaseModule} from "@angular/fire/database";
import { AngularFirestoreModule} from "@angular/fire/firestore";
import { AngularFireAuthModule} from "@angular/fire/auth";
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PwdResetComponent } from './pwd-reset/pwd-reset.component';
import { LocationComponent } from './public-transit/location/location.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    SignInComponent,
    PublicTransitComponent,
    BusComponent,
    TgmComponent,
    MetroComponent,
    MapsComponent,
    EditProfileComponent,
    OverviewComponent,
    PasswordComponent,
    AddressComponent,
    HistoryComponent,
    NotificationsComponent,
    LoginComponent,
    RegisterComponent,
    PwdResetComponent,
    LocationComponent,
    CommunityComponent,
    TestComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
