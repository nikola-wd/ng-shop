import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../products/product.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(products: Product[], type: string): any {
    if (type === 'all') {
      return products;
    } else {
      return products.filter(product => {
        return product.type === type;
      });
    }
  }
}







