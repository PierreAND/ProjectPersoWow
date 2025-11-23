import { Inject, Injectable, InjectionToken } from "@angular/core"
import { Classes } from "../models/wowClass.model";
import { Observable } from "rxjs";
import { ClassDetailSimpleDTO } from "../../infrastructure/dto/wow-details-class.dto";
import { ClassDetail, ClassImage } from "../models/wowClassDetail.model";

export interface WowClassRepository  {
 getAll(): Observable<Classes[]>;
 getById(id: number): Observable<ClassDetail>;
 getImage(id: number): Observable<ClassImage>;
}

export const WOW_CLASS_REPOSITORY = new InjectionToken<WowClassRepository>(
    'WowClassRepository'
)