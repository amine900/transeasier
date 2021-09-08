import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChagelniService } from 'src/app/services/changelni.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {
  addTicket: FormGroup;
  constructor(private fb: FormBuilder, private changelniService: ChagelniService, private snackbars: SnackbarService) { }

  ngOnInit(): void {
    this.addTicket = this.fb.group({
      value: ['', Validators.required],
      operator: ['', Validators.required],
      number: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14),Validators.pattern("^[0-9]*$")]],
    });
  }
  add() {
    this.changelniService.get(this.addTicket.get("operator").value).push({value: this.addTicket.get("value").value,
     number: this.addTicket.get("number").value}).then(() => {this.addTicket.reset(); this.snackbars.openSnackBar('ticket added successfully')})
  }

}
