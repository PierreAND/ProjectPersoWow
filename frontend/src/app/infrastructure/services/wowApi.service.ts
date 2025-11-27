import { Classes } from "../../domain/models/wowClass.model";
import { map, Observable } from "rxjs";
import { environment } from '../../../../environment';
import { WowClassRepository } from "../../domain/repositories/IWowClass.repository.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {ClassDetailSimpleDTO, mediaDTO } from "../dto/wow-details-class.dto";
import { ClassDetail, ClassImage } from "../../domain/models/wowClassDetail.model";
import { WowClassDetailMapper } from "../mapper/wowClassDetails.mapper";
import { WowClassImgMapper } from "../mapper/wowImage.mapper";
import { SpecializationDTO } from "../dto/wow-specialization-details.dto";
import { SpeDetails } from "../../domain/models/wowSpecializationDetails";
import { SpecializationMapper } from "../mapper/wowSpeDetails.mapper";
import { Injectable } from "@angular/core";


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
        map(res =>res.classes.filter(cls => ![10, 12, 13].includes(cls.id))
            
        )
    );
}

getById(id: number): Observable<ClassDetail> {
  const headers = new HttpHeaders({
    Authorization: `Bearer ${environment.bearerToken}`
  });
  return this.http.get<ClassDetailSimpleDTO>(`https://us.api.blizzard.com/data/wow/playable-class/${id}?namespace=static-11.2.5_63286-us`, { headers }).pipe(
    map((dto: ClassDetailSimpleDTO) => WowClassDetailMapper.fromDetailDTO(dto))
  );
}


getImage(id:number): Observable<ClassImage> {
    const headers = new HttpHeaders({
    Authorization: `Bearer ${environment.bearerToken}`
  });
  return  this.http.get<mediaDTO>(`https://us.api.blizzard.com/data/wow/media/playable-class/${id}?namespace=static-11.2.5_63286-us`, {headers}).pipe(
    map((dto: mediaDTO ) => WowClassImgMapper.fromDetailDTO(dto))
  )
}

getSpeId(id: number) : Observable<SpeDetails> {
    const headers = new HttpHeaders({
    Authorization: `Bearer ${environment.bearerToken}`
  });
  return this.http.get<SpecializationDTO>(`https://us.api.blizzard.com/data/wow/playable-specialization/${id}?namespace=static-11.2.5_63286-us`, {headers}).pipe(
    map((dto: SpecializationDTO) => 
      SpecializationMapper.fromDTO(dto))
  
  )
  
}
}