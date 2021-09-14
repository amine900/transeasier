import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(public auth: AuthService, private router : Router) {
    this.getScreenSize();
    this.router.events.subscribe((val) =>
    {
      let footer = document.getElementById('footer');
      // if(this.router.url == "/changalni" || this.router.url=="/publicTransit/bus" || this.router.url=="/publicTransit/metro" || this.router.url=="/publicTransit/TGM"){
      //   footer.style.position = "fixed";
      //   footer.style.width = "100%";
      // }
      // else {
      //   footer.style.position = "static";
      //   footer.style.width = "100%";
      //   footer.style.bottom = "0";

      // }

    }
    )


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
