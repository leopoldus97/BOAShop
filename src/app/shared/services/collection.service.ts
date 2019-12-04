import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Collection} from '../models/collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  url = environment.apiUrl + 'collections';

  constructor(private http: HttpClient) { }

  getCollections(): Observable<Collection[]> {
    return this.http.get<Collection[]>(this.url).pipe(take(1));
  }

  getCollectionByID(id): Observable<Collection> {
    return this.http.get<Collection>(this.url + '/' + id).pipe(take(1));
  }
}

