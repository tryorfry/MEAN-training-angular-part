import { Component } from '@angular/core';
import {ProductService} from './product.service'
import { SelectControlValueAccessor } from '@angular/forms';
import { ONE_SECOND } from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dbsproject';
  user = "Sachin Dangol";
  products;
  pricesort;

  constructor(private productservice: ProductService) { }

  ngDoCheck() {
    this.products = this.productservice.products;
  }

  sort() {
    if(this.pricesort == "increasing") {
      this.ascending();
    }
    else {
      this.descending();
    }
  }

  ascending() {
    this.products.sort(function(first, second) {
      if (first.price > second.price) {
        return 1;
      }
      else if(first.price < second.price) {
        return -1;
      }
      else {
        return 0;
      }
    });
  }

  descending() {
    this.products.sort(function(first, second) {
      if (first.price < second.price) {
        return 1;
      }
      else if(first.price > second.price) {
        return -1;
      }
      else {
        return 0;
      }
    });
  }

}


