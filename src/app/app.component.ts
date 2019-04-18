import { Component } from '@angular/core';
import {ProductService} from './product.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dbsproject';
  user = "Sachin Dangol";
  products

  constructor(private productservice: ProductService) { }

  ngDoCheck() {
    this.products = this.productservice.products;
  }

}


