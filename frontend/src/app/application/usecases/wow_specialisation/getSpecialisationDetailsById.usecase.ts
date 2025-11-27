import { Inject ,Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SPE_CLASS_REPOSITORY, ISpecialisationRepository } from "../../../domain/repositories/IWowSpe.repository";
import { Specialisation } from "../../../domain/models/wowSpeDetails.model";

@Injectable()

export class GetSpecialisationbyId {
    constructor(@Inject(SPE_CLASS_REPOSITORY) private specialisationRepository : ISpecialisationRepository) {}
        execute(id: number) : Observable<Specialisation> {
            return this.specialisationRepository.getSpecialisationId(id)
        }
    
}