import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicTransitComponent } from './public-transit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MetroComponent } from './metro/metro.component';
import { BusComponent } from './bus/bus.component';
import { TgmComponent } from './tgm/tgm.component';
import { LocationComponent } from './location/location.component';
import { StationComponent } from './station/station.component';



@NgModule({
  declarations: [
    PublicTransitComponent,
    MetroComponent,
    TgmComponent,
    BusComponent,
    LocationComponent,
    StationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path:"", component:PublicTransitComponent, children: [{ path: 'metro', component: MetroComponent},
    { path: '', redirectTo: 'bus', pathMatch: 'full' },
    { path: 'bus', component: BusComponent},
    { path: 'TGM', component: TgmComponent}]}
    ])
  ]
})
export class PublicTransitModule { }
