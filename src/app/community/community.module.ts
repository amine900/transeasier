import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityComponent } from './community.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
CommunityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:"", component:CommunityComponent}])

  ]

})
export class CommunityModule { }
