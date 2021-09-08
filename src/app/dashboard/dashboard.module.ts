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

@NgModule({
  declarations: [
    DashboardComponent,
    UsersManagementComponent,
    TransportComponent,
    ParkingComponent,
    AddTicketComponent
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
    MatInputModule
    
  ]
})
export class DashboardModule { }
