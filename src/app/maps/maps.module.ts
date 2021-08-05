import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MapsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path:"", component:MapsComponent}])
  ]
})
export class MapsModule { }
