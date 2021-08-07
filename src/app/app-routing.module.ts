import { CommunityComponent } from './community/community.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { LoginComponent } from './sign-in/login/login.component';
import { RegisterComponent } from './sign-in/register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AddressComponent } from './edit-profile/address/address.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HistoryComponent } from './edit-profile/history/history.component';
import { NotificationsComponent } from './edit-profile/notifications/notifications.component';
import { OverviewComponent } from './edit-profile/overview/overview.component';
import { PasswordComponent } from './edit-profile/password/password.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path:'maps' , loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'contact',loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
{ path: 'aboutUs', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)},
{ path: 'community', component: CommunityComponent},
{ path: 'signIn',component:SignInComponent, children: [{ path: 'login', component: LoginComponent},
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'register', component: RegisterComponent}]},
{ path: 'publicTransit', loadChildren: () => import('./public-transit/public-transit.module').then(m => m.PublicTransitModule)},
{path: "profile", component:EditProfileComponent, canActivate: [AuthGuardGuard], children: [{path: "address", component: AddressComponent}, {path: "history", component:HistoryComponent},
{path: "Notifications", component:NotificationsComponent}, {path:"password", component:PasswordComponent}, {path: "overview", component:OverviewComponent}, {path: "", redirectTo:"overview", pathMatch:"full"}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
