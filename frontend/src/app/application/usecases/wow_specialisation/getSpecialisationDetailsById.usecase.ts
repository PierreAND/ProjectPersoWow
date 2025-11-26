import { Inject ,Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SPE_CLASS_REPOSITORY, SpecialisationRepository } from "../../../domain/repositories/IWowSpe.repository";
import { SpeDetails } from "../../../domain/models/wowSpecializationDetails";
import { Specialisation } from "../../../domain/models/wowSpeDetails.model";

@Injectable({
    providedIn: 'root'
})

export class GetSpecialisationbyId {
    constructor(@Inject(SPE_CLASS_REPOSITORY) private specialisationRepository : SpecialisationRepository) {}
        execute(id: number) : Observable<Specialisation> {
            return this.specialisationRepository.getSpecialisationId(id)
        }
    
}