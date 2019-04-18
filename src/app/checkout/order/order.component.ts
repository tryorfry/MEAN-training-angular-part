import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  name = 'sachin';
  address = 'hello';


  constructor(private os: OrderService) { }

  ngOnInit() {
  }

  submitOrder() {
    alert('thank you for placing order sachin');

    var body = {
      name: this.name,
      address: this.address,
      email: localStorage.getItem('email'),
      products: []
    };

    this.os.submitOrder(body).subscribe(
      (response) => {
        if (response) {
          console.log(response);
          alert('successfully ordered item. Tracking ID is:' + response.order._id);
        }
      },
      (error) => {
        console.log('internal server error');
      }
    );
  }
}
