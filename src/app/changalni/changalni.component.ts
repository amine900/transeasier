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
  ooredooTickets: any[]
  orangeTickets: any[]
  TelecomTickets: any[]

  constructor( private fb:FormBuilder , private cs :ChagelniService ) { }

  ngOnInit(): void {
    this.findticket = this.fb.group({
    value: '',
    operator: '',
    car: '',
    number:1,
     });
    this.cs.get('ooredoo').valueChanges().subscribe(tickets => this.ooredooTickets = tickets)
    this.cs.get('orange').valueChanges().subscribe(tickets => this.orangeTickets = tickets)
    this.cs.get('tt').valueChanges().subscribe(tickets => this.TelecomTickets = tickets)
  }
  check() {
    let ticketNumber = this.findticket.get('number').value;
    let ticketValue = this.findticket.get('value').value;
    let operator = this.findticket.get('operator').value
    if (operator == 'Ooredoo') {
      this.ooredooTickets.some(
        ticket => ticket.number == ticketNumber && ticket.value == ticketValue
      )
    } else if (operator == 'TT') {
      this.TelecomTickets.some(
        ticket => ticket.number == ticketNumber && ticket.value == ticketValue
      )
    } else {
      this.orangeTickets.some(
        ticket => ticket.number == ticketNumber && ticket.value == ticketValue
      )
    }
  }

  }
  
