import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  // id: number;

  constructor(private route: ActivatedRoute, private prodService: ProductsService) { }

  ngOnInit() {
    // this.id = this.route.snapshot.params['id'];

    // ovo nije potrebno osim u slucaju da se params menja programaticki iz ove komponente, dovoljan se samo kod iznad ako to nije slucaj
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.id = params['id'];
    //   }
    // );

    this.product = this.prodService.getSingleProduct(this.route.snapshot.params['id']);
  }



  addToCart(product: Product) {
    this.prodService.addToCart(product);
  }

}
