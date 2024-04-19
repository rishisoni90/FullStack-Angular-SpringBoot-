import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Customerservice } from './customerservice';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports:[RouterOutlet,HttpClientModule],
 providers:[Customerservice]


})
export class AppComponent  {
  title = 'my-angular-project';


  constructor() { }

 
}
