import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Type} from '../../models/type.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private httpClient: HttpClient) {
  }

  getTypesFromServer(): Observable<Type[]> {
    return this.httpClient.get<Type[]>(`http://localhost:3000/types/`);
  }
}
