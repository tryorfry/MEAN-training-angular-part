import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitems
  name
  totalbill = 0;
  constructor(private cartservice : CartService, private http: HttpClient) { 
  }

  ngDoCheck(){
    this.cartitems = this.cartservice.cartitems
  }

  ngOnInit() {
  }

  removeFromCart(product) {
    alert('calling remove');
    var body = {
      productid: product.productid,
      email: localStorage.getItem('email')
    }

    this.cartservice.removeFromCart(body).subscribe((response) => {
      this.cartitems.splice(this.cartitems.indexOf(product), 1);
      this.cartservice.cartitems = this.cartitems;
      this.totalbill = this.totalbill - product.product.price;
    },
    (error) => {}
    );
  }


}
