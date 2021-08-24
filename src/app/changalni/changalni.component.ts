import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ChagelniService } from '../services/changelni.service';
import { park_auth } from '../models/ticket';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-changelni',
  templateUrl: './changalni.component.html',
  styleUrls: ['./changalni.component.css']
})
export class ChangalniComponent implements OnInit {
  findticket: FormGroup;
  filteredValues: Observable<string[]>;
  filteredNumbers: Observable<string[]>;
  ooredooTickets: any[]
  orangeTickets: any[]
  TelecomTickets: any[]
  park: park_auth = new park_auth()
  errmsg:string =''; 
  submitted:boolean = false;
  err:boolean = false;
  constructor(private fb: FormBuilder, private cs: ChagelniService) { }

  ngOnInit(): void {
    this.findticket = this.fb.group({
      value: '',
      operator: '',
      car: '',
      number: '',
    });
    this.cs.get('ooredoo').snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(tickets => { this.ooredooTickets = tickets })
    this.cs.get('orange').snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(tickets => { this.orangeTickets = tickets })
    this.cs.get('tt').snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(tickets => { this.TelecomTickets = tickets })
  }

  getvalue() {
    return this.findticket.get('value').value
  }


  check() {
    let ticketNumber = this.findticket.get('number').value;
    let ticketValue = this.findticket.get('value').value;
    let operator = this.findticket.get('operator').value
    if (operator == 'Ooredoo') {
      return this.ooredooTickets.some(
        ticket => {
          if (ticket.number == ticketNumber && ticket.value == ticketValue) {
            this.cs.delete(ticket.key, 'ooredoo')
            return 1
          }
        }
      )
    } else if (operator == 'TT') {
      return this.TelecomTickets.some(
        ticket => {
          if (ticket.number == ticketNumber && ticket.value == ticketValue) {
            this.cs.delete(ticket.key, 'tt')
            return 1
          }
        }
      )
    } else {
      return this.orangeTickets.some(
        ticket => {
          if (ticket.number == ticketNumber && ticket.value == ticketValue) {
            this.cs.delete(ticket.key, 'orange')
            return 1
          }
        }
      )
    }
  }

  get() {
    let value = this.getvalue()
    let auth = this.check()
    let validity: string = ''
    let car = this.findticket.get('car').value

    if (auth) {
      if (value == "1TND") {
        validity = '1 Hour'
      }
      else if (value == "5TND") {
        validity = '6 Hour'
      }
      else if (value == "10TND") {
        validity = '12 Hour'
      }
      else {
        validity = '24 Hour'
      }
    this.submitted=true
      
    this.park.releaseDate =Date()
    this.park.validity = validity;
    this.park.car = car;
    console.log('testest ', this.cs.create(this.park).then((snap) => {
      this.park.key = snap.key;
  }));
   // this.park.key = this.findticket.get('id')
   // console.log(this.park);
    
   this.park.key = this.cs.create(this.park);


    }
    else {
      this.errmsg="invalid ticket"
      console.log(this.errmsg)
      this.err=true
    }
  }
} 


  

