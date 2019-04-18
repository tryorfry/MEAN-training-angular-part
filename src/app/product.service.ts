import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
const producturl = "http://localhost:3000/products";
const addProducturl = "http://localhost:3000/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products

  constructor(private http : HttpClient) { 
    this.getProducts().subscribe((response) => {
      this.products = response;
    },
    (error) => {
      console.log("error from getting products api");
    });

  }

  getProducts() {
    return this.http.get(producturl);
  }

  addProduct(body) {
    return this.http.post(addProducturl, body);
  }

  getProductDetails(productid) {
    let getProductUrl = "http://localhost:3000/product/" + productid;
    return this.http.get(getProductUrl);
  }

}
