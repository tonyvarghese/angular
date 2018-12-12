import { Component, OnInit } from '@angular/core';

import { Customer }    from '../customer';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nationalities = ['', 'United States', 'United Kingdom', 'Iceland', 'South Korea'];
 
  customer = new Customer(1, '', '', 23);
 
  submitted = false;
 
  onSubmit() { 
    this.submitted = true; 
  }
  
}
