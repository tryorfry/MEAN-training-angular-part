import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const addtocarturl = 'http://localhost:3000/addtocart';
const cartUrl = 'http://localhost:3000/cart';
const removeurl = 'http://localhost:3000/cart/remove';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartitems;

  constructor(private http: HttpClient) { 
    this.getCartItems().subscribe(
      (response) => {
        this.cartitems = response["cart"];
      },
      (error) => {}
    )
  }

  getCartItems() {
    return this.http.post(cartUrl, {email: localStorage.getItem('email')});
  }

  addToCart(data) {
    return this.http.post(addtocarturl, data);
  }

  removeFromCart(data) {
    alert('service cart');
    return this.http.post(removeurl, data);
  }


}
