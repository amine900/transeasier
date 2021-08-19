import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WassalniComponent } from './wassalni.component';
import { RouterModule } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { RideOfferComponent } from '../components/ride-offer/ride-offer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RideSearchComponent } from '../components/ride-search/ride-search.component';
import { ContactDriverComponent } from '../components/contact-driver/contact-driver.component';
import {MatTableModule} from '@angular/material/table';
import { MyRidesComponent } from '../components/my-rides/my-rides.component';

@NgModule({
  declarations: [
    WassalniComponent,
    RideOfferComponent,
    RideSearchComponent,
    ContactDriverComponent,
    MyRidesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatAutocompleteModule,
    RouterModule.forChild([{path:"", component: WassalniComponent}])
  ]
})
export class WassalniModule { }
