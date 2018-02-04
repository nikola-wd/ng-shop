import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { CartminiComponent } from './cart/cartmini/cartmini.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './products/product/product.component';
import { ProductsService } from './services/products.service';
import { CartComponent } from './cart/cart.component';
import { NumberInputComponent } from './shared/number-input/number-input.component';
import { ProductsDataBaseService } from './services/products-data-base.service';
import { NotificationComponent } from './shared/notification/notification.component';
import { NotificationService } from './services/notification.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductCardComponent,
    CartminiComponent,
    ContactComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,
    NumberInputComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductsDataBaseService, ProductsService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
