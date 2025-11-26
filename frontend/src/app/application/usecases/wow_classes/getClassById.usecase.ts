import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WOW_CLASS_REPOSITORY, WowClassRepository } from "../../../domain/repositories/IWowClass.repository.interface";
import { ClassDetail } from "../../../domain/models/wowClassDetail.model";


@Injectable({
  providedIn: 'root'
})
export class GetClasseById {
  constructor(@Inject(WOW_CLASS_REPOSITORY) private wowclassRepository: WowClassRepository) {}

  execute(id: number): Observable<ClassDetail> {
    return this.wowclassRepository.getById(id)
  }
}
