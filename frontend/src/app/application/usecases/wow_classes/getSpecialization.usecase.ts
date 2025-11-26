import { Inject ,Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WOW_CLASS_REPOSITORY, WowClassRepository } from "../../../domain/repositories/IWowClass.repository.interface";
import { SpeDetails } from "../../../domain/models/wowSpecializationDetails";

@Injectable({
    providedIn: 'root'
})

export class GetSpecializationbyId {
    constructor(@Inject(WOW_CLASS_REPOSITORY) private wowclassRepository : WowClassRepository) {}
        execute(id: number) : Observable<SpeDetails> {
            return this.wowclassRepository.getSpeId(id)
        }
    
}