import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changelni',
  templateUrl: './changalni.component.html',
  styleUrls: ['./changalni.component.css']
})
export class ChangalniComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  operator:Text ;
  valeur:number;
  code:number;
  slm(){
    console.log(
      this.code,this.operator,this.valeur
    )
  }
  

}