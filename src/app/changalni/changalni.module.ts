import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChangalniComponent } from './changalni.component';


@NgModule({
  declarations: [
    ChangalniComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([{path:"", component:ChangalniComponent}])
  ]
})
export class ChangalniModule { }
