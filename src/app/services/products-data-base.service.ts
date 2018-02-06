import { Product } from '../products/product.model';

export class ProductsDataBaseService {

  constructor() { }

  private allProducts: Product[] = [
    new Product(
      1,
      'T-shirt 1',
      'T-shirt 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil!',
      'assets/images/1.jpg',
      'assets/images/1--sm.jpg',
      10
    ),
    new Product(
      2,
      'T-shirt 2',
      'T-shirt 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil!',
      'assets/images/2.jpg',
      'assets/images/2--sm.jpg',
      12
    ),
    new Product(
      3,
      'T-shirt 3',
      'T-shirt 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil!',
      'assets/images/3.jpg',
      'assets/images/3--sm.jpg',
      13
    ),
    new Product(
      4,
      'T-shirt 4',
      'T-shirt 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil!',
      'assets/images/4.jpg',
      'assets/images/4--sm.jpg',
      19
    )
  ];

  getDBProducts() {
    return this.allProducts.slice();
  }

}
