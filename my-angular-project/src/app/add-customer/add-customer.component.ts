import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Customer } from '../customer';
import { Customerservice } from '../customerservice';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-customer',
  standalone: true,
  imports: [RouterLink, NgFor,FormsModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css',
  
})
export class AddCustomerComponent implements OnInit  {

  customerDetails: Customer[] = [];

  customer1 : Customer = {
    id: 0, // Or any other default number value
    name: '',
    email: '',
    phoneNumber: ''
  };

  constructor(private customer: Customerservice){}
  ngOnInit(): void {
      
    this.getCustomer();
    
  }
  private getCustomer()
  {
    this.customer.retrieveCustomerInfo().subscribe(data =>{
      this.customerDetails = data;
    })
  }

 

  onClickSave(): void {

    if(this.customer1.id == 0 || this.customer1.name == '' || this.customer1.email == '' || this.customer1.phoneNumber == '') 
      {
        alert('Please Add Values');
        return;
      }
    this.customer.addCustomerInfo(this.customer1).subscribe(() => {

      
      // Refresh customer list after adding
      this.getCustomer();
      // Reset customer1 object for new input
      this.customer1 = {
        id: 0,
        name: '',
        email: '',
        phoneNumber: ''
      };
    });
  }
}
