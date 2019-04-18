import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product = {
    name: null,
    description: null,
    image_url: null,
    price: null,
  };

  constructor(private ps: ProductService, private router: Router) { 

  }

  ngOnInit() {
  }

  createProduct() {
    this.ps.addProduct(this.product).subscribe(
      (response) => {
        if (response) {
          console.log(response);
          this.ps.products = this.ps.products || [];
          this.ps.products.push(response["product"]);
          this.router.navigate(['/']);
        }

      },
      (error) => {
        console.log('internal server error');
      }
    );
  }

}
