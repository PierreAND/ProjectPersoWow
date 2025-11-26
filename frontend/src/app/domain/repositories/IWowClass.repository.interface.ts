import { InjectionToken } from "@angular/core"
import { Classes } from "../models/wowClass.model";
import { Observable } from "rxjs";
import { ClassDetail, ClassImage } from "../models/wowClassDetail.model";
import { SpeDetails } from "../models/wowSpecializationDetails";

export interface WowClassRepository  {
 getAll(): Observable<Classes[]>;
 getById(id: number): Observable<ClassDetail>;
 getImage(id: number): Observable<ClassImage>;
 getSpeId(id: number): Observable<SpeDetails>
}

export const WOW_CLASS_REPOSITORY = new InjectionToken<WowClassRepository>(
    'WowClassRepository'
)