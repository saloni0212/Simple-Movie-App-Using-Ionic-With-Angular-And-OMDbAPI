import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


export enum SearchType {
  all='',
  movie='movie',
  series='series',
  episode='episode'
}


@Injectable({
  providedIn: 'root'
})
export class MovieService {

url = 'http://www.omdbapi.com/';
apiKey = '3b601364';

  constructor(private http: HttpClient) { }

  searchData(title: string, type: SearchType): Observable<any>
  {
    return this.http.get(`${this.url}?s=${encodeURIComponent(title)}&type=${type}&apiKey=${this.apiKey}`)
    .pipe(
      map((results: { [x: string]: any; }) => {
      console.log('RAW: ', results);
      return results['Search'];
      })
    );
  }

  getDetails(id: any) 
  {
    return this.http.get(`${this.url}?i=${id}&plot=full&apiKey=${this.apiKey}`);
  }
}
