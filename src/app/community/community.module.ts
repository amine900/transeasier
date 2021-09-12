import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityComponent } from './community.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
CommunityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:"", component:CommunityComponent}]),
    FormsModule

  ]

})
export class CommunityModule { }
