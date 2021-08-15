import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AutocompleteService } from 'src/app/services/autocomplete.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-ride-offer',
  templateUrl: './ride-offer.component.html',
  styleUrls: ['./ride-offer.component.css']
})
export class RideOfferComponent implements OnInit {

  departureInput = new FormControl();
  arrivalInput = new FormControl();
  filteredDepartures: Observable<string[]>;
  filteredArrivals: Observable<string[]>;
  rideofferComponentRef = RideOfferComponent;
  constructor(private autocompleteService:AutocompleteService, public Dialog: DialogService) { }

  ngOnInit(): void {
    this.filterOptions(this.departureInput)
    this.filterOptions(this.arrivalInput)
  }
  filterOptions (form:FormControl){
    if (form === this.departureInput) {
      this.filteredDepartures = this.departureInput.valueChanges.pipe(
        startWith(''),
        map((value) => this.autocompleteService._filter(value))
      );
    } else {
      this.filteredArrivals = this.arrivalInput.valueChanges.pipe(
        startWith(''),
        map((value) => this.autocompleteService._filter(value))
      );
    }
  }
}
