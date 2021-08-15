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


@NgModule({
  declarations: [
    WassalniComponent,
    RideOfferComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDialogModule,
    MatAutocompleteModule,
    RouterModule.forChild([{path:"", component: WassalniComponent}])
  ]
})
export class WassalniModule { }
