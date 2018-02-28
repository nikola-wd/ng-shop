import { Component, OnInit, OnDestroy } from '@angular/core';

import { Product } from './product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  filterBy: string;
  searchText: string;
  layoutMode: boolean; // true for grid, false for list
  isLoading = true;

  constructor( private prodService: ProductsService ) {}

  ngOnInit() {
    this.prodService.fetchProductsFromDB().subscribe(
      products => {
        this.prodService.setAllProducts(products);
        this.products = this.prodService.getAllProducts();
      },
      err => console.log(err),
      () => this.isLoading = false
    );



    this.filterBy = this.prodService.getFilter();
    this.searchText = this.prodService.getSearchFilter();
    this.layoutMode = this.prodService.getLayout();

    this.prodService.filterTypeEmitter.subscribe(
      (filterValue: string) => {
        this.filterBy = filterValue;
      }
    );
    this.prodService.searchEmitter.subscribe(
      (searchValue: string) => {
        this.searchText = searchValue;
      }
    );
    this.prodService.layoutModeEmitter.subscribe(
      (layoutVal: boolean) => {
        this.layoutMode = layoutVal;
      }
    );
  }

  ngOnDestroy() {
    this.products = [];
  }

}
