import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { InvoiceDataDetails } from '../Models/invoice-data';
@Injectable({
  providedIn: 'root'
})
export class UserInvoiceService {
  // API = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http:HttpClient) { }

  // onGetUserDetails(){
  //   return this.http.get(this.API);
  // }
}
