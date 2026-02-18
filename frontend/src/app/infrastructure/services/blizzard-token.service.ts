import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment';

@Injectable({
  providedIn: 'root',
})
export class BlizzardTokenService {
  private accessToken: string | null = null;
  private readonly tokenEndpoint =  environment.urlBlizzardToken;;

  constructor(private http: HttpClient) {}

  getToken(): Observable<string> {

    if (this.accessToken) {
      return new Observable((observer) => {
        observer.next(this.accessToken!);
        observer.complete();
      });
    }

   
    return this.http.get<{ token: string }>(this.tokenEndpoint).pipe(
      tap((res) => {
        this.accessToken = res.token;
      }),
 
      map((res) => res.token),
    );
  }


  clearToken() {
    this.accessToken = null;
  }
}
