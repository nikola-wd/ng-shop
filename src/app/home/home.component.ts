import { Component, OnInit } from '@angular/core';
// import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // constructor(private http: Http) {}
  constructor() {}

  ngOnInit() {
  }


  // addItem() {
  //   const newItem = {
  //     "description": "Brown Leather Boots Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque molestiae, obcaecati veniam nobis sunt. Deserunt incidunt est adipisci ea doloremque sunt non animi? Consequatur sed enim aperiam reiciendis nihil!",
  //     "id": 6,
  //     "imagePath": "assets/images/shoes2.jpg",
  //     "imagePathSm": "assets/images/shoes2--sm.jpg",
  //     "name": "Brown Leather Boots",
  //     "price": 79,
  //     "qty": 1,
  //     "type": "shoes"
  //   };

  //   this.http.post('https://ngshop-27da4.firebaseio.com/products.json', newItem).subscribe(
  //     (response: Response) => {
  //       console.log(response);
  //     }
  //   );
  // }
}
