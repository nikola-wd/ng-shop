import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  filterBy: string;
  filterToggle: boolean;
  @ViewChild('searchInput') searchText: ElementRef;

  constructor(private prodService: ProductsService) { }

  ngOnInit() {
    this.setFilterToggle();
    this.filterBy = this.prodService.getFilter();
    this.prodService.filterTypeEmitter.subscribe(
      (filverValue: string) => {
        this.filterBy = filverValue;
      }
    );
  }


  setFilterToggle() {
    this.filterToggle = window.outerWidth > 768 ? true : false;
  }
  setFilter(filterValue: string) {
    this.prodService.setFilter(filterValue);
  }

  searchFilter() {
    this.prodService.searchFilter(this.searchText.nativeElement.value);
  }

  resetFilters() {
    this.prodService.setFilter('all');
    this.searchText.nativeElement.value = '';
    this.prodService.searchFilter('');
  }

}
