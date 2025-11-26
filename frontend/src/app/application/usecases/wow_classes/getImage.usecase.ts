import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WOW_CLASS_REPOSITORY, WowClassRepository } from "../../../domain/repositories/IWowClass.repository.interface";
import {  ClassImage } from "../../../domain/models/wowClassDetail.model";


@Injectable({
  providedIn: 'root'
})
export class GetImageById {
  constructor(@Inject(WOW_CLASS_REPOSITORY) private wowclassRepository: WowClassRepository) {}

  execute(id: number): Observable<ClassImage> {
    return this.wowclassRepository.getImage(id)
  }
}
