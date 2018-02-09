import { Product } from '../products/product.model';

export class ProductsDataBaseService {

  constructor() { }

  private allProducts: Product[] = [
    new Product(
      'tshirts',
      1,
      'Soccer dress',
      'Soccer dress Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil!',
      'assets/images/1.jpg',
      'assets/images/1--sm.jpg',
      10
    ),
    new Product(
      'tshirts',
      2,
      'Blue t-shirt',
      'Blue t-shirt Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil!',
      'assets/images/2.jpg',
      'assets/images/2--sm.jpg',
      12
    ),
    new Product(
      'shoes',
      3,
      'White Sneakers',
      'White Sneakers Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil!',
      'assets/images/shoes1.jpg',
      'assets/images/shoes1--min.jpg',
      55
    ),
    new Product(
      'tshirts',
      4,
      'Gray t-shirt',
      'Gray t-shirt Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil!',
      'assets/images/3.jpg',
      'assets/images/3--sm.jpg',
      13
    ),
    new Product(
      'tshirts',
      5,
      'Black t-shirt',
      'Black t-shirt Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil!',
      'assets/images/4.jpg',
      'assets/images/4--sm.jpg',
      19
    ),
    new Product(
      'shoes',
      6,
      'Brown Leather Boots',
      'Brown Leather Boots Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil!',
      'assets/images/shoes2.jpg',
      'assets/images/shoes2--sm.jpg',
      79
    )
  ];

  getDBProducts() {
    return this.allProducts.slice();
  }

}
