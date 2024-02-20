import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TrendingResponse } from '@projectTypes/trending.type';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyApiService {

  private http = inject(HttpClient)

  getTrendings(withLog: 'noLog'|'withLog' = 'noLog'):Observable<TrendingResponse>{
    const url = 'https://api.giphy.com/v1/gifs/trending'
    const params = new HttpParams()
      .append('api_key', environment.apiKey)
    return this.http.get<TrendingResponse>(url,{params}).pipe(withLog === 'withLog' ? tap(console.log): tap() )
  }
}
