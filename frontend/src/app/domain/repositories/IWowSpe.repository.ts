import { InjectionToken } from "@angular/core";
import { Specialisation } from "../models/wowSpeDetails.model";
import { Observable } from "rxjs";


export interface ISpecialisationRepository {
    getSpecialisationId(id : number): Observable<Specialisation>
}

export const SPE_CLASS_REPOSITORY = new InjectionToken<ISpecialisationRepository>(
    'SpeClassRepository'
)