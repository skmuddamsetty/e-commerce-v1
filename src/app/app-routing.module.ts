import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'product', component: ProductComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'my-cart', component: MyCartComponent },
  { path: 'wish-list', component: WishListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
