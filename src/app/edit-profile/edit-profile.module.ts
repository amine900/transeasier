import { NgModule } from '@angular/core';
import { EditProfileComponent } from './edit-profile.component';
import { OverviewComponent } from './overview/overview.component';
import { PasswordComponent } from './password/password.component';
import { AddressComponent } from './address/address.component';
import { HistoryComponent } from './history/history.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EditProfileComponent,
    OverviewComponent,
    PasswordComponent,
    AddressComponent,
    HistoryComponent,
    NotificationsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{path:"", component:EditProfileComponent, children: [{path: "address", component: AddressComponent}, {path: "history", component:HistoryComponent},
    {path: "Notifications", component:NotificationsComponent}, {path:"password", component:PasswordComponent}, {path: "overview", component:OverviewComponent}, {path: "", redirectTo:"overview", pathMatch:"full"}]}])
  ]
})
export class EditProfileModule { }
