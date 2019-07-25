import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.css']
})
export class TypeFilterComponent implements OnInit {

  constructor(public store: StoreService) { }

  ngOnInit() {
    this.store.getTypes();

  }
  selectType(event) {
    this.store.setSelectedType(event.value);
  }
}
