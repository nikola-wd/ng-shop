import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../products/product.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cartmini',
  templateUrl: './cartmini.component.html',
  styleUrls: ['./cartmini.component.css']
})
export class CartminiComponent implements OnInit, OnDestroy {
  cartminiProducts: Product[];
  cartminiTotal: number;
  cartAdditionSubscription: Subscription;
  cartTotalSubscription: Subscription;

  constructor(private prodService: ProductsService) {}

  ngOnInit() {
    this.cartminiProducts = this.prodService.getCartAddedProducts();
    this.cartAdditionSubscription = this.prodService.cartAdditionEmitter.subscribe(
      (products: Product[]) => {
        this.cartminiProducts = products;
      }
    );
    this.cartminiTotal = this.prodService.getCartTotal();
    this.cartTotalSubscription = this.prodService.cartTotalEmitter.subscribe(
      (cTotal: number) => {
        this.cartminiTotal = cTotal;
      }
    );
  }



  removeCartProduct(itemIndex: number) {
    this.prodService.removeCartSingleItem(itemIndex);
  }

  emptyCart() {
    this.prodService.emptyCart();
  }



  ngOnDestroy() {
    this.cartAdditionSubscription.unsubscribe();
    this.cartTotalSubscription.unsubscribe();
  }



}
