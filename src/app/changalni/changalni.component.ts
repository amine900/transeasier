import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ChagelniService } from '../services/changelni.service';

@Component({
  selector: 'app-changelni',
  templateUrl: './changalni.component.html',
  styleUrls: ['./changalni.component.css']
})
export class ChangalniComponent implements OnInit {
  findticket: FormGroup;
  filteredValues: Observable<string[]>;
  filteredNumbers: Observable<string[]>;

  constructor( private fb:FormBuilder , private cs :ChagelniService ) { }

  ngOnInit(): void {
    this.findticket = this.fb.group({
    value: '',
    operator: '',
    car: '',
    number:1,
     });
     this.filterOptions(this.findticket.get("from"));
     this.filterOptions(this.findticket.get("to"));
  }
  filterOptions (formControl){
    if (formControl === this.findticket.get("from")) {
      this.filteredValues= this.findticket.get("from").valueChanges.pipe(
        startWith(''),
      );
    } else {
      this.filteredNumbers = this.findticket.get("to").valueChanges.pipe(
        startWith(''),
      );
    }
  }
 get_ticket(){
   
 }
  

}