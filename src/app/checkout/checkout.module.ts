import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import {Routes, RouterModule} from '@angular/router';
import { OrderService } from './order.service';

const routes: Routes = [
  {path: '', component:OrderComponent}
]

@NgModule({
  declarations: [OrderComponent],
  providers: [OrderService],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CheckoutModule {

}
