import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../products/product.model';

@Component({
  selector: 'app-cartmini',
  templateUrl: './cartmini.component.html',
  styleUrls: ['./cartmini.component.css']
})
export class CartminiComponent implements OnInit {
  cartminiProducts: Product[];
  cartminiTotal: number;

  constructor(private prodService: ProductsService) {}

  ngOnInit() {
    this.cartminiProducts = this.prodService.getCartAddedProducts();
    this.prodService.cartAdditionEmitter.subscribe(
      (products: Product[]) => {
        this.cartminiProducts = products;
      }
    );
    this.cartminiTotal = this.prodService.getCartTotal();
    this.prodService.cartTotalEmitter.subscribe(
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






}
