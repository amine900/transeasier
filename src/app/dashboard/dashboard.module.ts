import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { UsersManagementComponent } from '../components/dashboard-components/users-management/users-management.component';
import { TransportComponent } from '../components/dashboard-components/transport/transport.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ParkingComponent } from '../components/dashboard-components/parking/parking.component';
import { AddTicketComponent } from '../components/dashboard-components/add-ticket/add-ticket.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BusSettingsComponent } from '../components/dashboard-components/bus-settings/bus-settings.component';
import { AddStationComponent } from '../components/dashboard-components/add-station/add-station.component';
import { AddTransportComponent } from '../components/dashboard-components/add-transport/add-transport.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateTransportComponent } from '../components/dashboard-components/update-transport/update-transport.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersManagementComponent,
    TransportComponent,
    ParkingComponent,
    AddTicketComponent,
    BusSettingsComponent,
    AddStationComponent,
    AddTransportComponent,
    UpdateTransportComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatTableModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
    MatSlideToggleModule
    
  ]
})
export class DashboardModule { }
