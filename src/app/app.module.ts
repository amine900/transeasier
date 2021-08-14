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
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RideOfferComponent } from './components/ride-offer/ride-offer.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    CommunityComponent,
    RideOfferComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    NgbModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
