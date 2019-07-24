import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {

  constructor(public store: StoreService) { }

  ngOnInit() {
    
    
    this.store.getApartments();
    console.log(this.store.apartments)
}

}
