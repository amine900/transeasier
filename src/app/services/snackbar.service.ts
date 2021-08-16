import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public _snackBar: MatSnackBar) { }
  openSnackBar(msg:string) {
    this._snackBar.open(msg, "",
      {duration: 1000});
  }
}
