import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WassalniComponent } from './wassalni.component';
import { RouterModule } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    WassalniComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatAutocompleteModule,
    RouterModule.forChild([{path:"", component: WassalniComponent}])
  ]
})
export class WassalniModule { }
