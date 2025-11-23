import { ClassDetailSimpleDTO } from '../dto/wow-details-class.dto';
import { ClassDetail } from '../../domain/models/wowClassDetail.model';

export class WowClassDetailMapper {

    private static excludedRaceIds = [
    25, 31, 9, 30, 28, 27, 22, 34, 32, 35, 36, 26, 24, 29, 37, 52, 70, 85, 84
  ];
  static fromDetailDTO(dto: ClassDetailSimpleDTO): ClassDetail {
    return {
      id: dto.id,
      name: dto.name,
      power_type: {
        id: dto.power_type.id,
        name: dto.power_type.name 
      },
      specializations: dto.specializations.map(s => ({
        id: s.id,
        name: s.name 
      })),
    playable_races: dto.playable_races
        .filter(r => !this.excludedRaceIds.includes(r.id)) 
        .map(r => ({
          id: r.id,
          name: r.name,
        })),
    };
  }
}
