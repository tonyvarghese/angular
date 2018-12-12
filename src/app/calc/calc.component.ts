import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {


  public number1 : number;
  public number2 : number = 55; //default value
  public result : number;

  constructor() { }

  ngOnInit() {
  }

    
  public add(){
      this.result = this.number1 + this.number2
  }  
  
  

}
