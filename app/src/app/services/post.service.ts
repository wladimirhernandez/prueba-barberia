import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  URI: string;

  constructor(private http: HttpClient) {
    this.URI = `http://www.mocky.io/v2/5a663e0d2e0000002b323e0e`;
  }

  All() {
    return this.http.get(this.URI)
    .pipe(
      map((res) => {
        return res;
      })).toPromise();
  }

}