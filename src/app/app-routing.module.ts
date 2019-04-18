import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import { AddProductComponent } from './add-product/add-product.component';
import { RouteguardService } from './routeguard.service';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CartComponent } from './cart/cart.component';
import {CheckoutModule} from './checkout/checkout.module';

const routes: Routes = [
  {path: '', component:AppComponent},
  {path: 'login', component:LoginComponent},
  {path: 'singup', component:SignupComponent},
  {path: 'addproduct', component:AddProductComponent, canActivate: [RouteguardService]},
  {path: 'product/:productid', component:ProductdetailComponent},
  {path: 'cart', component:CartComponent},
  {path: 'order', loadChildren: './checkout/checkout.module#CheckoutModule'}, // this will be lazily loaded.
  {path: '**', redirectTo: "/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
