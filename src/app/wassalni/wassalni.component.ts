import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AutocompleteService } from '../services/autocomplete.service';
import { RideOfferComponent } from '../components/ride-offer/ride-offer.component';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-wassalni',
  templateUrl: './wassalni.component.html',
  styleUrls: ['./wassalni.component.css']
})
export class WassalniComponent implements OnInit {
  locationInput = new FormControl();
  destinationInput = new FormControl();
  filteredLocations: Observable<string[]>;
  filteredDestinations: Observable<string[]>;
  rideofferComponentRef = RideOfferComponent;
  constructor(private autocompleteService:AutocompleteService, public Dialog: DialogService) { }

  ngOnInit(): void {
    this.filterOptions(this.locationInput)
    this.filterOptions(this.destinationInput)
  }
  filterOptions (form:FormControl){
    if (form === this.locationInput) {
      this.filteredLocations = this.locationInput.valueChanges.pipe(
        startWith(''),
        map((value) => this.autocompleteService._filter(value))
      );
    } else {
      this.filteredDestinations = this.destinationInput.valueChanges.pipe(
        startWith(''),
        map((value) => this.autocompleteService._filter(value))
      );
    }
  }
}
