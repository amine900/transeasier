import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Carpool } from 'src/app/models/carpool';
import { CarpoolService } from 'src/app/services/carpool.service';
import { User } from 'src/app/models/user.model';
import { DatePipe } from '@angular/common';

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
  rideList: Carpool[];
  filteredRides: Carpool[];
  constructor(
    private datepipe:DatePipe,
    private carpoolService: CarpoolService,
    private afs: AngularFirestore
  ) {}
  ngOnChanges(): void {
    this.carpoolService.getRides().valueChanges()
      .subscribe((rides) => {
        this.rideList = rides
        this.rideList.forEach((ride) => {
          this.afs.doc(`users/${ride.user_id}`).valueChanges().subscribe( (user:User) =>
            {ride.user = user}
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
