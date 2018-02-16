import { Component, OnInit, OnDestroy } from '@angular/core';

import { Product } from './product.model';
import { ProductsService } from '../services/products.service';
import { Response } from '@angular/http';

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

  constructor(
    private prodService: ProductsService,
  ) { }

  ngOnInit() {
    this.prodService.fetchProductsFromDB().subscribe(
      (response: Response) => {
        const fetchedProducts = response.json();
        this.prodService.setAllProducts(fetchedProducts);
        this.products = this.prodService.getAllProducts();
        this.isLoading = false;
      }
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
