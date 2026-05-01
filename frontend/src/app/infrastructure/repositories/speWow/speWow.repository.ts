import { Specialisation } from "../../../domain/models/wowSpeDetails.model";
import { map, Observable } from "rxjs";
import { ISpecialisationRepository } from "../../../domain/repositories/IWowSpe.repository";
import { SpecialisationMapper } from "../../mapper/wowSpe.mapper";
import { SpecialisationDTO } from "../../dto/wow-spe.dto";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable()

export class SpecialisationRepository implements ISpecialisationRepository {
    constructor(private http: HttpClient) {}
    
    getSpecialisationId(id: number): Observable<Specialisation> {
        return this.http.get<SpecialisationDTO>(`api/specialisation/${id}`).pipe(
            map((dto: SpecialisationDTO) => 
            SpecialisationMapper.fromDTO(dto))
        )
    }
}