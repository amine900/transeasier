import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Carpool } from 'src/app/models/carpool';
import { CarpoolService } from 'src/app/services/carpool.service';
import firebase from 'firebase/app';

@Component({
  selector: 'app-my-rides',
  templateUrl: './my-rides.component.html',
  styleUrls: ['./my-rides.component.scss']
})
export class MyRidesComponent implements OnInit {
  displayedColumns = ['departure', 'arrival', 'date', 'time', 'price', 'seats', 'delete'];
  rideList: Carpool[];
  constructor(public carpoolService: CarpoolService) { }

  ngOnInit(): void {
    this.carpoolService.getRides().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    )
      .subscribe((rides) => {
        this.rideList = rides
        this.rideList = this.rideList.filter(ride => ride.user_id == firebase.auth().currentUser.uid)
        this.rideList.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0))
      });
  }
  increaseSeats(ride: Carpool) {
    this.carpoolService.update(ride.key, {seats: ++ride.seats})
  }
  decreaseSeats(ride: Carpool) {
    this.carpoolService.update(ride.key, {seats: --ride.seats})
  }
}
