import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AutocompleteService } from '../services/autocomplete.service';
import { RideOfferComponent } from '../components/carpool/ride-offer/ride-offer.component';
import { MyRidesComponent } from '../components/carpool/my-rides/my-rides.component';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-wassalni',
  templateUrl: './wassalni.component.html',
  styleUrls: ['./wassalni.component.css']
})
export class WassalniComponent implements OnInit {
  findRide: FormGroup;
  filteredLocations: Observable<string[]>;
  filteredDestinations: Observable<string[]>;
  rideofferComponentRef = RideOfferComponent;
  myRidesComponentRef = MyRidesComponent;
  showRides:boolean;
  constructor(private autocompleteService:AutocompleteService, private fb:FormBuilder, public Dialog: DialogService) { }

  ngOnInit(): void {
    this.showRides = false
    this.findRide = this.fb.group({
      from: '',
      to: '',
      passengers: 1,
      departureDate: new Date(),
    });
    this.filterOptions(this.findRide.get("from"));
    this.filterOptions(this.findRide.get("to"));
  }
  filterOptions (formControl){
    if (formControl === this.findRide.get("from")) {
      this.filteredLocations = this.findRide.get("from").valueChanges.pipe(
        startWith(''),
        map((value) => this.autocompleteService._filter(value))
      );
    } else {
      this.filteredDestinations = this.findRide.get("to").valueChanges.pipe(
        startWith(''),
        map((value) => this.autocompleteService._filter(value))
      );
    }
  }
}
