import { Component, OnInit, Input } from '@angular/core';
import { Apartment } from 'models/apartment.model';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {
  @Input() apartment: Apartment;

  constructor() { }

  ngOnInit() {
    console.log('this.apartment')
  }

}
