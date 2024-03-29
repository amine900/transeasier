import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path:'maps' , loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'contact',loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
{ path: 'aboutUs', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)},
{ path: 'carpool', loadChildren: () => import('./wassalni/wassalni.module').then(m => m.WassalniModule), canActivate: [AuthGuardGuard]},
{ path: 'signIn', loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule)},
{ path: 'publicTransit', loadChildren: () => import('./public-transit/public-transit.module').then(m => m.PublicTransitModule)},
{path: "profile", loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfileModule), canActivate: [AuthGuardGuard]},
  { path: 'changalni', loadChildren: () => import('./changalni/changalni.module').then(m => m.ChangalniModule) },
  { path: 'community', loadChildren: () => import('./community/community.module').then(m => m.CommunityModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
