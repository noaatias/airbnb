import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Apartment } from '../../models/apartment.model';
import { ApartmentService } from './apartment.service';
import {Type} from '../../models/type.model';

export interface IState {
    apartments: Apartment[];
    types: Type[];
    selectedApartment: Apartment;
    selectedType: string;
}

const initialState: IState = {
  apartments: [],
  selectedApartment: null,
    types: [],
    selectedType: null,
}

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    private readonly _store = new BehaviorSubject<IState>(initialState);
    constructor(
      private apartmentService: ApartmentService,
      
    ) { }

    get currentState(): IState {
        return this._store.getValue();
    }

    setState(newState: Partial<IState>) {
        this._store.next({
            ...this.currentState,
            ...newState,
        })
    }

    getApartments() {
        this.apartmentService.getApartmentsFromServer().subscribe(apartments => {
            this.setState({
              apartments,
            });
            console.log(apartments)
        })
    }

    get apartments(): Apartment[] {
      console.log(this.currentState.apartments)
        return this.currentState.apartments;
    }

   
}