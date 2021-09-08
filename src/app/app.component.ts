import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  screenWidth: number;
  title = 'transeasier';
  showdrop:boolean = false
  constructor(public auth: AuthService) {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
  }
  ondropclick(): void {
    this.showdrop = !this.showdrop
  }
  ngOnInit(): void {
  }
}
