import { Classes } from "../../domain/models/wowClass.model";
import { map, Observable } from "rxjs";
import { environment } from '../../../../environment';
import { WowClassRepository } from "../../domain/repositories/IWowClass.repository.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ClassDetailSimpleDTO } from "../dto/wow-details-class.dto";
import { ClassDetail } from "../../domain/models/wowClassDetail.model";


@Injectable({
    providedIn: 'root'
})

export class WowApiService implements WowClassRepository {
  private apiUrl = environment.url;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Classes[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${environment.bearerToken}`
    });
    
    return this.http.get<{ classes: Classes[] }>(this.apiUrl, { headers }).pipe(
        map(res =>res.classes
            
        )
    );
}

  getById(id: number): Observable<ClassDetail> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${environment.bearerToken}`
    });

    return this.http.get<ClassDetail>(`https://us.api.blizzard.com/data/wow/playable-class/${id}?namespace=static-11.2.5_63286-us`, { headers});
  }

  getImageId(id: number): Observable<ClassDetail> {
      const headers = new HttpHeaders({
      Authorization: `Bearer ${environment.bearerToken}`
    });

    
return this.http.get<ClassDetail>(`https://us.api.blizzard.com/data/wow/media/playable-class/${id}?namespace=static-11.2.5_63286-us`, {headers});
  

}

}