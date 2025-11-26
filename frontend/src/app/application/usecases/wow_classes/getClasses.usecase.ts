import { Inject, Injectable } from "@angular/core";
import { Classes } from "../../../domain/models/wowClass.model";
import { Observable } from "rxjs";
import { WOW_CLASS_REPOSITORY, WowClassRepository } from "../../../domain/repositories/IWowClass.repository.interface";


@Injectable({
    providedIn: 'root'
})


export class GetClasses {
    constructor(@Inject(WOW_CLASS_REPOSITORY)private wowclassRepository: WowClassRepository) {}
    execute(): Observable<Classes[]>{
        return this.wowclassRepository.getAll();
    }
}