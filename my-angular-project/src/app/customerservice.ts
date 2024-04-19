import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Customer } from "./customer";

@Injectable({
  providedIn: 'root'
})
export class Customerservice {

    private baseUrl = "http://localhost:8080/customer/retrieveCustomerInfo";

    constructor(private http: HttpClient) {}

    retrieveCustomerInfo(): Observable<Customer[]> {
        return this.http.get<Customer[]>(`${this.baseUrl}`);
    }

}
