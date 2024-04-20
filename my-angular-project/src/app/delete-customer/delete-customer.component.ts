import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Customer } from '../customer';
import { Customerservice } from '../customerservice';
import { NgFor } from '@angular/common';

import { FormsModule } from '@angular/forms';



@Component({
  selector: 'delete-customer',
  standalone: true,
  imports: [RouterLink,NgFor,FormsModule],
  templateUrl: './delete-customer.component.html',
  styleUrl: './delete-customer.component.css'
})
export class DeleteCustomerComponent implements OnInit {

  customerdetail: Customer[] = [];

  enteredId: number | undefined;

  onInputChange(): void {
    console.log('Entered ID:', );
    // You can perform further actions here based on the entered ID
  }

  constructor(private customer: Customerservice){}
  ngOnInit(): void {
      this.getCustomer();
     
  }

  private getCustomer()
  {
    this.customer.retrieveCustomerInfo().subscribe(data =>{
      this.customerdetail = data;
    })
  }


  private deleteCustomer()
  {

  
 
      if(this.enteredId != undefined)
        {
          this.customer.deleteCustomerInfo('id', this.enteredId).subscribe();
  
          alert('Record is delete Successfully');
        }
  
    

   
     
    
  }

  onClick(): void{
    const enteredIdNumber = Number(this.enteredId);
    const containsId: boolean = this.customerdetail.some(customer => customer.id === enteredIdNumber);
    if (containsId) {
      this.deleteCustomer();
    } else {
      alert('Invalid id');
    }

    this.getCustomer();
    
    
  }

}
