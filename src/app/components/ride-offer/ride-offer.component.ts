import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Carpool } from 'src/app/models/carpool';
import { AutocompleteService } from 'src/app/services/autocomplete.service';
import { CarpoolService } from 'src/app/services/carpool.service';
import { DialogService } from 'src/app/services/dialog.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-ride-offer',
  templateUrl: './ride-offer.component.html',
  styleUrls: ['./ride-offer.component.scss']
})
export class RideOfferComponent implements OnInit {
  addRide: FormGroup;
  ride: Carpool = new Carpool()
  filteredDepartures: Observable<string[]>;
  filteredArrivals: Observable<string[]>;
  rideofferComponentRef = RideOfferComponent;
  constructor(private datepipe:DatePipe, private autocompleteService:AutocompleteService, public Dialog: DialogService, private fb: FormBuilder, private carpoolService: CarpoolService, private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.addRide = this.fb.group({
      departure: [null, [Validators.required, Validators.minLength(3)]],
      arrival: [null, [Validators.required, Validators.minLength(3)]],
      seats: [null, [Validators.required, Validators.min(1)]],
      price: [null, [Validators.required, Validators.min(0)]],
      date: [null, Validators.required],
      time: [null, Validators.required],
    });
    this.filterOptions(this.addRide.get("departure"));
    this.filterOptions(this.addRide.get("arrival"));
  }
  filterOptions (formControl){
    if (formControl === this.addRide.get("departure")) {
      this.filteredDepartures = this.addRide.get("departure").valueChanges.pipe(
        startWith(''),
        map((value) => this.autocompleteService._filter(value))
      );
    } else {
      this.filteredArrivals = this.addRide.get("arrival").valueChanges.pipe(
        startWith(''),
        map((value) => this.autocompleteService._filter(value))
      );
    }
  }
  onSubmit() {
    this.ride.arrival = this.addRide.get("arrival").value
    this.ride.departure = this.addRide.get("departure").value
    this.ride.time = this.addRide.get("time").value
    this.ride.date = this.addRide.get("date").value
    this.ride.date = this.datepipe.transform(this.ride.date, 'dd/MM');
    this.ride.price = this.addRide.get("price").value
    this.ride.seats = this.addRide.get("seats").value
    this.ride.user_id = firebase.auth().currentUser.uid
    this.carpoolService.create(this.ride).then(() => {this.snackbarService.openSnackBar("ride added successfully")}).catch(e =>{console.log(e); this.snackbarService.openSnackBar("an error occured, please try again later")})
  }
}
