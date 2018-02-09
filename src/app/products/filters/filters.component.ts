import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  filterBy: string;

  constructor(private prodService: ProductsService) { }

  ngOnInit() {
    this.filterBy = this.prodService.getFilter();
    this.prodService.filterTypeEmitter.subscribe(
      (filverValue: string) => {
        this.filterBy = filverValue;
      }
    );
  }


  setFilter(filterValue: string) {
    this.prodService.setFilter(filterValue);
  }

}
