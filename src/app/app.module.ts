import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { DataService } from './data.service';
import { AddProductComponent } from './add-product/add-product.component';
 import { AngularFireModule } from '@angular/fire';
 import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { MyCartComponent } from './my-cart/my-cart.component';
import { WishListComponent } from './wish-list/wish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    ProductComponent,
    AddProductComponent,
    MyCartComponent,
    WishListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
