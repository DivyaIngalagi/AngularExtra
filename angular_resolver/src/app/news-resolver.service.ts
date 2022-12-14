import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class NewsResolverService {

  constructor(private http:HttpClient) { }
  resolve():Observable<any> {
    let newsUrl='http://httpbin.org/post';
    let news='The sky is blue';

    return this.http.post(newsUrl,news).pipe(
      map((dataFromApi)=>dataFromApi),
      catchError((err)=>throwError(()=>new Error(err.json().console.error)))
      
    )
}
}
