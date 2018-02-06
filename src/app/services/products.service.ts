import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData } from 'ng2-toasty';


import { Product } from '../products/product.model';
import { ProductsDataBaseService } from './products-data-base.service';

@Injectable()
export class ProductsService {
  cartAdditionEmitter = new EventEmitter<Product[]>(); // emitted for card and single product, minicart listens to it
  cartTotalEmitter = new EventEmitter<number>(); // emitted for price total calculation on, addition, substraction, increase or removal

  private allProducts: Product[] = this.prodDB.getDBProducts();
  private cartAddedProducts: Product[] = [];
  private cartTotal = 0;
  private selectedProduct: Product;


  constructor(
    private prodDB: ProductsDataBaseService,
    private router: Router,
    private toastyService: ToastyService
  ) { }


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

    this.addToast(false, product.name, true);
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

    this.addToast(false, removedProductName, false);
  }

  emptyCart() {
    this.cartAddedProducts = [];
    this.cartAdditionEmitter.emit(this.cartAddedProducts.slice());
    this.cartTotal = 0;
    this.cartTotalEmitter.emit(this.cartTotal);
    this.router.navigate(['/products']);
    this.addToast(true);
  }






  addToast(cartEmptied = false, prodName: string = '', alertType = false) {
    const toastOptions: ToastOptions = {
      title: '',
      msg: !cartEmptied ? `${prodName}, ${alertType ? 'added to' : 'removed from'} cart` : 'Cart emptied',
      showClose: true,
      timeout: 5000,
      theme: 'material',
      // onAdd: (toast: ToastData) => {
      //   console.log('Toast ' + toast.id + ' has been added!');
      // },
      // onRemove: function (toast: ToastData) {
      //   console.log('Toast ' + toast.id + ' has been removed!');
      // }
    };
    // Add see all possible types in one shot

    alertType ? this.toastyService.success(toastOptions) : this.toastyService.error(toastOptions);
  }

}
