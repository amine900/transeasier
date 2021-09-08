import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { park_auth } from 'src/app/models/ticket';
import { ChagelniService } from 'src/app/services/changelni.service';
import { DialogService } from 'src/app/services/dialog.service';
import { AddTicketComponent } from '../add-ticket/add-ticket.component';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
  displayedColumns = ['id', 'number', 'date', 'validity'];
  addTicketRef = AddTicketComponent;
  constructor(private changelniService: ChagelniService, public Dialog: DialogService) { }
  parksList: park_auth[];
  filteredparksList: park_auth[];
  ngOnInit(): void {
    this.changelniService.getauth().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    )
      .subscribe((parks) => {
        this.filteredparksList = this.parksList = parks.filter(park => new Date(park.releaseDate).getTime() > new Date().getTime() - 1000*60*60*24)
      });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredparksList = this.parksList.filter((park) =>
      park.releaseDate.toLowerCase().includes(filterValue) || park.key.toLowerCase().includes(filterValue) || park.car.toLowerCase().includes(filterValue) || park.validity.toLowerCase().includes(filterValue)
    );
  }

}
