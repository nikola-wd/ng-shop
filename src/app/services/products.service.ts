import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData } from 'ng2-toasty';


import { Product } from '../products/product.model';
import { ProductsDataBaseService } from './products-data-base.service';

@Injectable()
export class ProductsService {
  cartAdditionEmitter = new EventEmitter<Product[]>(); // emitted for card and single product, minicart listens to it
  cartTotalEmitter = new EventEmitter<number>(); // emitted for price total calculation on, addition, substraction, increase or removal
  filterTypeEmitter = new EventEmitter<string>(); // emittet when filtering through product categories
  searchEmitter = new EventEmitter<string>();
  layoutModeEmitter = new EventEmitter<boolean>();

  private allProducts: Product[] = this.prodDB.getDBProducts();
  private cartAddedProducts: Product[] = [];
  private cartTotal = 0;
  private selectedProduct: Product;
  private filterBy = 'all';
  private search = '';
  private layoutMode = (
    !window.localStorage.getItem('ngShopLayout') || window.localStorage.getItem('ngShopLayout')) === 'grid' ? true : false;


  constructor(
    private prodDB: ProductsDataBaseService,
    private router: Router,
    private toastyService: ToastyService
  ) { }



  setFilter(filterValue: string) {
    this.filterBy = filterValue;
    this.filterTypeEmitter.emit(this.filterBy);
  }
  getFilter() {
    return this.filterBy;
  }

  searchFilter(searchValue: string) {
    this.search = searchValue;
    this.searchEmitter.emit(this.search);
  }
  getSearchFilter() {
    return this.search;
  }




  getAllProducts() {
    return this.allProducts.slice();
  }

  getSingleProduct(id: number): Product {
    this.selectedProduct = this.allProducts.find(p => p.id === +id);
    return this.selectedProduct;
  }

  // get max 3 similar products sorted from high price > low
  getSimilarProducts(prodType: string, prodId: number) {
    const SIMILAR_PRODUCTS = this.getAllProducts().sort((a, b) => b.price - a.price);
    return SIMILAR_PRODUCTS.filter((p) => {
      return p.id !== +prodId && p.type === prodType;
    }).slice(0, 3); // get max 3 items
  }





  addToCart(product: Product) {
    // if item is already in cart ++ its qty, don't readd it
    const added = this.cartAddedProducts.find(p => p === product);
    added ? added.qty++ : this.cartAddedProducts.push(product);

    this.cartAdditionEmitter.emit(this.cartAddedProducts);
    this.calculateCartTotal();
    this.cartTotalEmitter.emit(this.cartTotal);

    this.addToast(false, product.name, true);
  }





  getCartAddedProducts() {
    return this.cartAddedProducts;
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
    this.cartAdditionEmitter.emit(this.cartAddedProducts);
    this.calculateCartTotal();
    this.cartTotalEmitter.emit(this.cartTotal);
    this.addToast(false, removedProductName, false);
  }

  emptyCart() {
    this.cartAddedProducts = [];
    this.cartAdditionEmitter.emit(this.cartAddedProducts);
    this.cartTotal = 0;
    this.cartTotalEmitter.emit(this.cartTotal);
    this.router.navigate(['/products']);
    this.addToast(true);
  }



  getLayout() {
    return this.layoutMode;
  }
  setLayout(layoutValue: boolean) {
    window.localStorage.setItem('ngShopLayout', layoutValue ? 'grid' : 'list');
    this.layoutMode = layoutValue;
    this.layoutModeEmitter.emit(this.layoutMode);
  }






  addToast(cartEmptied = false, prodName: string = '', alertType = false) {
    const toastOptions: ToastOptions = {
      title: '',
      msg: cartEmptied ? 'Cart emptied' : `${prodName}, ${alertType ? 'added to' : 'removed from'} cart`,
      showClose: true,
      timeout: 5000,
      theme: 'material',
    };
    alertType ? this.toastyService.success(toastOptions) : this.toastyService.error(toastOptions);
  }

}
