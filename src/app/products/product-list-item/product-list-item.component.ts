import { Component, OnInit, Input } from '@angular/core';


import { Product } from '../product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input() product: Product;
  @Input() layoutMode: boolean;

  constructor(private prodService: ProductsService) { }

  ngOnInit() {
  }


  onAddToCart(product: Product) {
    this.prodService.addToCart(product);
  }
}
