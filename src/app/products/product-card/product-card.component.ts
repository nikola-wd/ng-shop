import { Component, OnInit, Input } from '@angular/core';


import { Product } from '../product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() layoutMode: boolean;

  constructor(private prodService: ProductsService) { }

  ngOnInit() {
  }


  onAddToCart(product: Product) {
    this.prodService.addToCart(product);
  }

}
