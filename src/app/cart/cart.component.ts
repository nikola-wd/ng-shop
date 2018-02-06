import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../products/product.model';
import { ProductsService } from '../services/products.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  cartProducts: Product[];
  cartTotal: number;
  cartAdditionSubscription: Subscription;
  cartTotalSubscription: Subscription;

  constructor(private prodService: ProductsService) {}

  ngOnInit() {
    this.cartProducts = this.prodService.getCartAddedProducts();
    this.cartAdditionSubscription = this.prodService.cartAdditionEmitter.subscribe(
      (products: Product[]) => {
        this.cartProducts = products;
      }
    );

    this.cartTotal = this.prodService.getCartTotal();
    this.cartTotalSubscription = this.prodService.cartTotalEmitter.subscribe(
      (cTotal: number) => {
        this.cartTotal = cTotal;
      }
    );
  }


  onValAdd(product: Product) {
    this.prodService.cartProductManipulate(product, true);
  }
  onValSub(product: Product) {
    this.prodService.cartProductManipulate(product);
  }


  removeCartProduct(itemIndex: number) {
    this.prodService.removeCartSingleItem(itemIndex);
  }

  emptyCart() {
    this.prodService.emptyCart();
  }

  onCheckout() {
    alert(JSON.stringify(this.cartProducts) + '\n\n\n' + 'Total: ' + this.cartTotal);
  }


  ngOnDestroy() {
    this.cartAdditionSubscription.unsubscribe();
    this.cartTotalSubscription.unsubscribe();
  }

}
