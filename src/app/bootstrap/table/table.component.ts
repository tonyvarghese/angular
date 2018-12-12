import { Component, OnInit } from '@angular/core';
import { Customer }    from '../../customer';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

        
  CUSTOMERS: Customer[] = [
    {id: 1, name: 'Mary', nationality: 'Taylor', age: 24},
    {id: 2, name: 'Peter', nationality: 'Smith', age: 18},
    {id: 3, name: 'Lauren', nationality: 'Taylor', age: 31}
  ];
}
