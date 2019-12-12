import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

title: string;
people: ICustomer[];
isVisible: boolean;

  constructor() { }

  ngOnInit() {
    this.title = "customers";
    this.isVisible = true;
    this.people=[
      {
        id: 1, name: 'Xabuki', city: 'Zuhatzu', orderTotal:9.99, customerSince: new Date(2014,12,15)
      },
      {
        id: 2, name: 'Galera', city: 'Congo', orderTotal:0.5, customerSince: new Date(2017,12,8)
      },
      {
        id: 3, name: 'JAvi', city: 'Urbasa', orderTotal:258, customerSince: new Date(2019,5,20)
      }
    ];
  }


  changeVisibility(){
    if(this.isVisible){
      this.isVisible = false
    }else{
      this.isVisible = true
    }
  }

}
