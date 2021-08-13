import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path:"", component:ContactComponent}])
  ]
})
export class ContactModule { }
