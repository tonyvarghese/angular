import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
   title = "USB Stick 8GB";
   itemCount = 0; 

   addItem() { 
      this.itemCount++;
   }           

}
