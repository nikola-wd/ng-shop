import { Injectable, EventEmitter } from '@angular/core';

import { Product } from '../products/product.model';
import { ProductsDataBaseService } from './products-data-base.service';
import { NotificationService } from './notification.service';

@Injectable()
export class ProductsService {
  cartAdditionEmitter = new EventEmitter<Product[]>(); // emitted for card and single product, minicart listens to it
  cartTotalEmitter = new EventEmitter<number>(); // emitted for price total calculation on, addition, substraction, increase or removal

  private allProducts: Product[] = this.prodDB.getDBProducts();
  private cartAddedProducts: Product[] = [];
  private cartTotal = 0;
  private selectedProduct: Product;


  constructor(private prodDB: ProductsDataBaseService, private notifService: NotificationService) { }


  getAllProducts() {
    return this.allProducts.slice();
  }

  getSingleProduct(id: number): Product {
    this.selectedProduct = this.allProducts.find(p => p.id === +id);
    return this.selectedProduct;
  }





  addToCart(product: Product) {
    // if item is already in cart ++ its qty, don't readd it
    const added = this.cartAddedProducts.find(p => p === product);
    added ? added.qty++ : this.cartAddedProducts.push(product);

    this.cartAdditionEmitter.emit(this.cartAddedProducts.slice());
    this.calculateCartTotal();
    this.cartTotalEmitter.emit(this.cartTotal);

    this.notifService.callNotif(product.name, true);
  }





  getCartAddedProducts() {
    return this.cartAddedProducts.slice();
  }

  calculateCartTotal() {
    this.cartTotal = 0;
    this.cartAddedProducts.forEach(element => {
      this.cartTotal += element.price * element.qty;
    });
  }

  getCartTotal() {
    return this.cartTotal;
  }


  cartProductManipulate(product: Product, increase: boolean = false) {
    const manipulatedProduct = this.cartAddedProducts.find(mp => mp === product);
    increase ? manipulatedProduct.qty++ : manipulatedProduct.qty--;
    this.calculateCartTotal();
    this.cartTotalEmitter.emit(this.cartTotal);
  }



  removeCartSingleItem(itemIndex: number) {
    const removedProductName = this.cartAddedProducts[itemIndex].name;
    this.cartAddedProducts.splice(itemIndex, 1);
    this.cartAdditionEmitter.emit(this.cartAddedProducts.slice());
    this.calculateCartTotal();
    this.cartTotalEmitter.emit(this.cartTotal);

    this.notifService.callNotif(removedProductName, false);
  }

  emptyCart() {
    this.cartAddedProducts = [];
    this.cartAdditionEmitter.emit(this.cartAddedProducts.slice());
    this.cartTotal = 0;
    this.cartTotalEmitter.emit(this.cartTotal);
  }

}
