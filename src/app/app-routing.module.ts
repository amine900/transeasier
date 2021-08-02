import { CommunityComponent } from './community/community.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { AddressComponent } from './edit-profile/address/address.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HistoryComponent } from './edit-profile/history/history.component';
import { NotificationsComponent } from './edit-profile/notifications/notifications.component';
import { OverviewComponent } from './edit-profile/overview/overview.component';
import { PasswordComponent } from './edit-profile/password/password.component';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { BusComponent } from './public-transit/bus/bus.component';
import { MetroComponent } from './public-transit/metro/metro.component';
import { PublicTransitComponent } from './public-transit/public-transit.component';
import { TgmComponent } from './public-transit/tgm/tgm.component';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { LoginComponent } from './sign-in/login/login.component';
import { RegisterComponent } from './sign-in/register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path:'maps' , component: MapsComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'contact', component: ContactComponent},
{ path: 'aboutUs', component: AboutUsComponent},
{ path: 'community', component: CommunityComponent},
{ path: 'signIn', component: SignInComponent, children: [{ path: 'login', component: LoginComponent},
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'register', component: RegisterComponent}]},
{ path: 'publicTransit', component: PublicTransitComponent, children: [{ path: 'metro', component: MetroComponent},
{ path: '', redirectTo: 'bus', pathMatch: 'full' },
{ path: 'bus', component: BusComponent},
{ path: 'TGM', component: TgmComponent}]},
{path: "profile", component: EditProfileComponent, canActivate: [AuthGuardGuard], children: [{path: "address", component: AddressComponent}, {path: "history", component:HistoryComponent},
{path: "Notifications", component:NotificationsComponent}, {path:"password", component:PasswordComponent}, {path: "overview", component:OverviewComponent}, {path: "", redirectTo:"overview", pathMatch:"full"}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
