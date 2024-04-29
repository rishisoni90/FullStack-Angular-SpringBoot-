import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Customer } from "./customer";

@Injectable({
  providedIn: 'root'
})
export class Customerservice {

    private baseUrl = "http://sample-env.eba-nr8awqv9.us-east-2.elasticbeanstalk.com/customer/retrieveCustomerInfo";

    private deleteUrl = "http://sample-env.eba-nr8awqv9.us-east-2.elasticbeanstalk.com/customer/deleteCustomer";

    private addUrl = "http://sample-env.eba-nr8awqv9.us-east-2.elasticbeanstalk.com/customer/saveCustomer";

    constructor(private http: HttpClient) {}

    retrieveCustomerInfo(): Observable<Customer[]> {
        return this.http.get<Customer[]>(`${this.baseUrl}`);
    }

    deleteCustomerInfo(key: string, value: number): Observable<any> {
        const body = {} as { [key: string]: number };
        body[key] = value;
        return this.http.delete<any>(this.deleteUrl, { body });
      }
      

      addCustomerInfo(customer: Customer): Observable<any> {
        return this.http.post<any>(`${this.addUrl}`, customer);
      }
      
      

}
