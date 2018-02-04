import { Product } from '../products/product.model';

export class ProductsDataBaseService {

  constructor() { }

  private allProducts: Product[] = [
    new Product(
      1,
      'T-shirt 1',
      'T-shirt 1 lorem ipsum',
      'https://loremflickr.com/680/260',
      'https://loremflickr.com/880/560',
      'https://loremflickr.com/48/48',
      10
    ),
    new Product(
      2,
      'T-shirt 2',
      'T-shirt 2 lorem ipsum',
      'https://loremflickr.com/681/261',
      'https://loremflickr.com/881/561',
      'https://loremflickr.com/49/49',
      12
    ),
    new Product(
      3,
      'T-shirt 3',
      'T-shirt 3 lorem ipsum',
      'https://loremflickr.com/682/262',
      'https://loremflickr.com/879/559',
      'https://loremflickr.com/50/50',
      13
    ),
    new Product(
      4,
      'T-shirt 4',
      'T-shirt 4 lorem ipsum',
      'https://loremflickr.com/683/263',
      'https://loremflickr.com/878/558',
      'https://loremflickr.com/51/51',
      19
    )
  ];

  getDBProducts() {
    return this.allProducts.slice();
  }

}
