import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PwdResetComponent } from '../components/pwd-reset/pwd-reset.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PwdResetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    PwdResetComponent,
    MatSnackBarModule
  ]
})
export class SharedModule { }
