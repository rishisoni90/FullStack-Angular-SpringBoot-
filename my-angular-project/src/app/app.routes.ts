import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';


export const routes: Routes = [
{path:'',component:HeaderComponent},
{path:'addcustomer',component:AddCustomerComponent},
{path:'viewcustomer',component:ViewCustomerComponent},
{path:'deletecustomer',component:DeleteCustomerComponent}
];
