import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ToastyModule } from 'ng2-toasty';

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
import { TruncatePipe } from './pipes/truncate.pipe';
import { FiltersComponent } from './products/filters/filters.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { ProductListItemComponent } from './products/product-list-item/product-list-item.component';
import { ToastyNotificationsService } from './services/toasty-notifications.service';


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
    TruncatePipe,
    FiltersComponent,
    FilterPipe,
    SearchPipe,
    ProductListItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastyModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductsService,
    ToastyNotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
