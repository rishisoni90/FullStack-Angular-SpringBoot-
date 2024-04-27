import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Customer } from '../customer';
import { NgFor } from '@angular/common';
import { Customerservice } from '../customerservice';



@Component({
  selector: 'view-customer',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css',

})
export class ViewCustomerComponent implements OnInit{

  constructor(private customer: Customerservice)
  {

  }

  customerDetails: Customer[] = [];

  ngOnInit(): void {
    this.getCustomer();
  }

      private getCustomer()
      {
        this.customer.retrieveCustomerInfo().subscribe(data => {
          this.customerDetails = data;
        })
      }
  

}
