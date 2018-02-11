import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, DoCheck {
  id: number;
  product: Product;
  similarProducts: Product[];

  constructor(private route: ActivatedRoute, private prodService: ProductsService) { }

  ngOnInit() {
    // this.id = this.route.snapshot.params['id'];
    // this code should be used only in the case of route params should change programatically from
    // within this component, if not, code above is enough (this is not the case now, since we change from similar products via routerLink)
    // this.route.params.subscribe(
      //   (params: Params) => {
        //     this.id = params['id'];
        //   }
        // );
    this.initProductSingleView();
  }


  ngDoCheck() {
    this.initProductSingleView();
  }

  // helper fn to save repeating same code in init and doCheck hooks
  initProductSingleView() {
    this.id = this.route.snapshot.params['id'];
    this.product = this.prodService.getSingleProduct(this.id);
    this.getSimilarProducts(this.product.type, this.product.id);
  }


  addToCart(product: Product) {
    this.prodService.addToCart(product);
  }


  getSimilarProducts(prodType: string, prodId: number) {
    this.similarProducts = this.prodService.getSimilarProducts(prodType, prodId);
  }

}
