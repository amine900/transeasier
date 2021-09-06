import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Carpool } from 'src/app/models/carpool';
import { CarpoolService } from 'src/app/services/carpool.service';
import { User } from 'src/app/models/user.model';
import { DatePipe } from '@angular/common';
import { DialogService } from 'src/app/services/dialog.service';
import { ContactDriverComponent } from '../contact-driver/contact-driver.component';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-ride-search',
  templateUrl: './ride-search.component.html',
  styleUrls: ['./ride-search.component.css']
})
export class RideSearchComponent implements OnInit, OnChanges {
  @Input() departure: string;
  @Input() arrival: string;
  @Input() seats: number;
  @Input() date: string;
  contactDriverRef = ContactDriverComponent;
  rideList: Carpool[];
  filteredRides: Carpool[];
  constructor(
    private datepipe:DatePipe,
    private carpoolService: CarpoolService,
    private db: AngularFireDatabase,
    public dialog: DialogService
  ) {}
  ngOnChanges(): void {
    this.carpoolService.getRides().valueChanges()
      .subscribe((rides) => {
        this.rideList = rides.map(ride => {Object.keys(ride).forEach(function(key){ ride[key] = String(ride[key]).split('"').join('').split("\\").join('')});return ride})
        this.rideList.forEach((ride) => {
          this.db.object(`users/${ride.user_id}`).valueChanges().subscribe( (user:User) =>
            {
              console.log(user);
              ride.user = user}
          )
        });
        this.filteredRides = this.rideList.filter(ride => ride.arrival.toLowerCase().includes(this.arrival.toLowerCase()) && ride.departure.toLowerCase().includes(this.departure.toLowerCase())
    && ride.date == this.datepipe.transform(this.date, 'dd/MM') && ride.seats >= this.seats)
    this.filteredRides.sort((a, b) => (a.time < b.time ? -1 : a.time > b.time ? 1 : 0))
      });
  }
  ngOnInit(): void {
    
  }
}