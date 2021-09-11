import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusSettingsComponent } from '../components/dashboard-components/bus-settings/bus-settings.component';
import { MetroSettingsComponent } from '../components/dashboard-components/metro-settings/metro-settings.component';
import { ParkingComponent } from '../components/dashboard-components/parking/parking.component';
import { StationSettingsComponent } from '../components/dashboard-components/station-settings/station-settings.component';
import { TGMSettingsComponent } from '../components/dashboard-components/tgmsettings/tgmsettings.component';
import { TransportComponent } from '../components/dashboard-components/transport/transport.component';
import { UsersManagementComponent } from '../components/dashboard-components/users-management/users-management.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UsersManagementComponent },
      { path: 'transport', component: TransportComponent, children: [{ path: '', redirectTo: "bus", pathMatch:"full" },
      { path: 'bus', component: BusSettingsComponent }, { path: 'TGM', component: TGMSettingsComponent }, {path: 'metro', component: MetroSettingsComponent},{path: 'stations', component: StationSettingsComponent} ] },
      { path: 'parking', component: ParkingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
