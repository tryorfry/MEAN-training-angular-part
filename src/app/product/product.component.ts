import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product

  constructor(private router: Router, private cartservice: CartService) { }

  ngOnInit() {
  }

  addToCart(event) {
    if(localStorage.getItem('isUserLoggedIn')) {
      var body = {
        email: localStorage.getItem('email'),
        productid: this.product.productid,
        product: {
          name: this.product.name,
          price: this.product.price,
          image: this.product.image
        }
      };
      this.cartservice.addToCart(body).subscribe(
        (response) => {alert('added to the cart')},
        (error) => {alert('failed to add to cart')}
      )
    }
    else {
      this.router.navigate(['/login']);
    }
    event.stopPropagation();
  }

  goToProduct() {
    var producturl = "/product/"+this.product.productid;
    this.router.navigate([producturl]);
  }

}
