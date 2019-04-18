import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  product;
  keys;

  constructor(private ps: ProductService, private route: ActivatedRoute) { 
    this.ps.getProductDetails(this.route.snapshot.params.productid).subscribe(
      (response) => {
        this.product = response["product"];
        this.keys = Object.keys(this.product);
      },
      (error) => {
        console.log("error from product details api", error);
      }
    );
  }

  ngOnInit() {
  }

}
