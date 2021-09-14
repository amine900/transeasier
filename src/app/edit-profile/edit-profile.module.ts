import { NgModule } from '@angular/core';
import { EditProfileComponent } from './edit-profile.component';
import { OverviewComponent } from './overview/overview.component';
import { PasswordComponent } from './password/password.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EditProfileComponent,
    OverviewComponent,
    PasswordComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{path:"", component:EditProfileComponent, children: [{path:"password", component:PasswordComponent}, {path: "overview", component:OverviewComponent}, {path: "", redirectTo:"overview", pathMatch:"full"}]}])
  ]
})
export class EditProfileModule { }
