import { ToastyNotificationsService } from './toasty-notifications.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



import { Product } from '../products/product.model';

@Injectable()
export class ProductsService {
  cartAdditionEmitter = new EventEmitter<Product[]>(); // emitted for card and single product, minicart listens to it
  cartTotalEmitter = new EventEmitter<number>(); // emitted for price total calculation on, addition, substraction, increase or removal
  filterTypeEmitter = new EventEmitter<string>(); // emittet when filtering through product categories
  searchEmitter = new EventEmitter<string>();
  layoutModeEmitter = new EventEmitter<boolean>();

  private allProducts: Product[];
  private cartAddedProducts: Product[] = [];
  private cartTotal = 0;
  private selectedProduct: Product;
  private filterBy = 'all';
  private search = '';
  private layoutMode = window.localStorage.getItem('ngShopLayout') === 'list' ? false : true;


  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private toastyNotifications: ToastyNotificationsService
  ) {}

  fetchProductsFromDB(): Observable<any> {
    return this.httpClient.get(`${environment.apiBase}/products.json`)
      .map(productSingle => {
        const adjustedFetchedProducts: any[] = [];
        for (const key in productSingle) {
          if (productSingle.hasOwnProperty(key)) {
            const prodToAdd = productSingle[key];
            prodToAdd.id = key;
            adjustedFetchedProducts.push(prodToAdd);
          }
        }
        return adjustedFetchedProducts;
      });
  }


  fetchSingleProductFromDB(indexID: string): Observable<any> {
    return this.httpClient.get(`${environment.apiBase}/products/${indexID}.json`)
      .map(singleProduct => {
        if (singleProduct === null) {
          this.router.navigate(['/products']);
          this.toastyNotifications.addToast(false, '', false, true);
          throw new Error('Product not found');
        }
        const adjustedProduct = {
          ...singleProduct,
          id: indexID
        };
        return adjustedProduct;
      });
  }





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


  setAllProducts(fetchedProducts: Product[]) {
    this.allProducts = fetchedProducts;
  }

  getAllProducts() {
    return this.allProducts.slice();
  }

  // get max 3 similar products sorted from high price > low
  getSimilarProducts(prodType: string, prodId: string) {
    const SIMILAR_PRODUCTS = this.getAllProducts().sort((a, b) => b.price - a.price);
    return SIMILAR_PRODUCTS.filter((p) => {
      return p.id !== prodId && p.type === prodType;
    }).slice(0, 3); // get max 3 items
  }





  addToCart(product: Product) {
    // if item is already in cart ++ its qty, don't readd it
    const added = this.cartAddedProducts.find(p => p === product);
    added ? added.qty++ : this.cartAddedProducts.push(product);
    this.cartAdditionEmitter.emit(this.cartAddedProducts);
    this.calculateCartTotal();
    this.cartTotalEmitter.emit(this.cartTotal);
    this.toastyNotifications.addToast(false, product.name, true);
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
    // fixes a bug where multiple items are added to a cart if we cleared a cart when item had qty > 1
    this.cartAddedProducts[itemIndex].qty = 1;

    const removedProductName = this.cartAddedProducts[itemIndex].name;
    this.cartAddedProducts.splice(itemIndex, 1);
    this.cartAdditionEmitter.emit(this.cartAddedProducts);
    this.calculateCartTotal();
    this.cartTotalEmitter.emit(this.cartTotal);
    this.toastyNotifications.addToast(false, removedProductName, false);
  }

  emptyCart() {
    // fixes a bug where multiple items are added to a cart if we cleared a cart when item had qty > 1
    for (const cp of this.cartAddedProducts) { cp.qty = 1; }

    this.cartAddedProducts = [];
    this.cartAdditionEmitter.emit(this.cartAddedProducts);
    this.cartTotal = 0;
    this.cartTotalEmitter.emit(this.cartTotal);
    this.router.navigate(['/products']);
    this.toastyNotifications.addToast(true);
  }



  getLayout() {
    return this.layoutMode;
  }
  setLayout(layoutValue: boolean) {
    window.localStorage.setItem('ngShopLayout', layoutValue ? 'grid' : 'list');
    this.layoutMode = layoutValue;
    this.layoutModeEmitter.emit(this.layoutMode);
  }


}
