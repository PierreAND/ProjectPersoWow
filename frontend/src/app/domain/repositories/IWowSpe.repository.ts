import { InjectionToken } from "@angular/core";
import { Specialisation } from "../models/wowSpeDetails.model";
import { Observable } from "rxjs";


export interface SpecialisationRepository {
    getSpecialisationId(id : number): Observable<Specialisation>
}

export const SPE_CLASS_REPOSITORY = new InjectionToken<SpecialisationRepository>(
    'SpeClassRepository'
)