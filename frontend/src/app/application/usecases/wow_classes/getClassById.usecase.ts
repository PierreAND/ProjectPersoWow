import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { WOW_CLASS_REPOSITORY, WowClassRepository } from "../../../domain/repositories/IWowClass.repository.interface";
import { ClassDetail } from "../../../domain/models/wowClassDetail.model";
import { ClassDetailSimpleDTO } from "../../../infrastructure/dto/wow-details-class.dto";
import { WowClassDetailMapper } from "../../../infrastructure/mapper/wowClassDetails.mapper";

@Injectable({
  providedIn: 'root'
})
export class GetClasseById {
  constructor(@Inject(WOW_CLASS_REPOSITORY) private wowclassRepository: WowClassRepository) {}

  execute(id: number): Observable<ClassDetail> {
    return this.wowclassRepository.getById(id).pipe(
      map((dto: ClassDetailSimpleDTO) => WowClassDetailMapper.fromDetailDTO(dto))
    );
  }
}
