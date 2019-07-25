import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Apartment } from '../../models/apartment.model';
import { ApartmentService } from './apartment.service';
import {Type} from '../../models/type.model';
import { TypeService } from './type.service';

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
      private typeService: TypeService,
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
        })
    }

    get apartments(): Apartment[] {
        return this.currentState.apartments;
    }
    getApartmentById(id: string) {
        this.apartmentService.getApartmentDetailsFromServer(id).subscribe(apartment => {
            this.setState({
                selectedApartment: apartment
            });
        });
    }
    get selectedApartment(): Apartment {
        return this.currentState.selectedApartment;
    }
    addApartment(apartment: Apartment) {
        return this.apartmentService.addApartmentToServer(apartment).subscribe(apartmentFromServer => {
          // it's important to add the movieForm retrieved from the server cause it contains the server-generated id!
          this.setState({
            apartments: this.apartments.concat(apartmentFromServer),
          });
        });
      }
       deleteApartment(id: string) {
          console.log("delete store")
           this.apartmentService.deleteApartmentFromServer(id).subscribe(
            apartment => console.log('apartment'),
            error => console.log('Error: ', error),
            () => console.log('finished')
           );
        //    this.apartmentService.getApartmentsFromServer().subscribe(apartments => {
        //     this.setState({
        //       apartments,
        //     });
        // })

         
      }
      get types(): Type[] {
        return this.currentState.types;
    }

    get selectedType(): IState['selectedType'] {
        return this.currentState.selectedType;
    }
   
    getTypes() {
        this.typeService.getTypesFromServer().subscribe(types => {
          this.setState({
            types,
          });
        });
      }
  
      setSelectedType(typeName: string) {
        this.setState({
          selectedType: typeName,
        });
        console.log(this.currentState.selectedType)
      }

    get filteredApartments(): Apartment[] {
        if (!this.selectedType) {
          return this.apartments;
        }
        return this.currentState.apartments.filter(apartment => this.selectedType===apartment.type);
      }
}