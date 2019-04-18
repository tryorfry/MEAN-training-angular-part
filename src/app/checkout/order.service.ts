import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { constants } from 'os';
const orderUrl = 'http://localhost:3000/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  submitOrder(data) {
      return this.http.post(orderUrl, data);
  }

}
