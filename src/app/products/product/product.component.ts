// import { Component, OnInit, DoCheck } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Product } from '../product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
// export class ProductComponent implements OnInit, DoCheck {
export class ProductComponent implements OnInit {
  id: string;
  product: Product;
  similarProducts: Product[];
  isLoading = true;

  constructor(private route: ActivatedRoute, private prodService: ProductsService) { }

  ngOnInit() {
    this.initProductSingleView();
  }


  // ngDoCheck() {
  //   this.initProductSingleView();
  // }

  // helper fn to save repeating same code in init and doCheck hooks
  initProductSingleView() {
    this.id = this.route.snapshot.params['id'];
    this.prodService.fetchSingleProductFromDB(this.id).subscribe(
      (response: Response) => {
        this.product = response.json();
        this.product.id = this.id;
        this.isLoading = false;
        // this.getSimilarProducts(this.product.type, this.product.id);
      }
    );
  }


  addToCart(product: Product) {
    this.prodService.addToCart(product);
  }


  getSimilarProducts(prodType: string, prodId: string) {
    this.similarProducts = this.prodService.getSimilarProducts(prodType, prodId);
  }

}
