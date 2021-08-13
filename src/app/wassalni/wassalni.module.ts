import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WassalniComponent } from './wassalni.component';
import { RouterModule } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    WassalniComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    RouterModule.forChild([{path:"", component: WassalniComponent}])
  ]
})
export class WassalniModule { }
