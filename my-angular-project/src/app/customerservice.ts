import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Customer } from "./customer";

@Injectable({
  providedIn: 'root'
})
export class Customerservice {

    private baseUrl = "http://localhost:8080/customer/retrieveCustomerInfo";

    private deleteUrl = "http://localhost:8080/customer/deleteCustomer";

    private addUrl = "http://localhost:8080/customer/saveCustomer";

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
