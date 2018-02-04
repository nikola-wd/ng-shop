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

  constructor(private prodService: ProductsService) { }

  ngOnInit() {
    this.products = this.prodService.getAllProducts();
  }

}
