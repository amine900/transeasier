import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Carpool } from 'src/app/models/carpool';
import { CarpoolService } from 'src/app/services/carpool.service';
import firebase from 'firebase/app';

@Component({
  selector: 'app-my-rides',
  templateUrl: './my-rides.component.html',
  styleUrls: ['./my-rides.component.css']
})
export class MyRidesComponent implements OnInit {
  displayedColumns = ['departure', 'arrival', 'date', 'time', 'price', 'seats', 'delete'];
  dataSource = [
    {name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {name: 'Helium', weight: 4.0026, symbol: 'He'},
    {name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {name: 'Boron', weight: 10.811, symbol: 'B'},
    {name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
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
