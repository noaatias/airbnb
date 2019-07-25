import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StoreService} from '../store.service';

@Component({
    selector: 'app-apartment-details',
    templateUrl: './apartment-details.component.html',
    styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {
    id: string;

    constructor(private route: ActivatedRoute, public store: StoreService, ) { }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.store.getApartmentById(this.id);
    }
onDelete(id:string){
    console.log('on delete')
    this.store.deleteApartment(id);
    this.store.getApartments();


}
 
}