import { Component, OnInit } from '@angular/core';

import { Product } from './product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  filterBy: string;
  searchText: string;

  constructor(private prodService: ProductsService) { }

  ngOnInit() {
    this.products = this.prodService.getAllProducts();
    this.filterBy = this.prodService.getFilter();
    this.searchText = this.prodService.getSearchFilter();

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
  }

}
