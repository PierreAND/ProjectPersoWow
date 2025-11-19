import { ClassDetailSimpleDTO } from '../dto/wow-details-class.dto';
import { ClassDetail } from '../../domain/models/wowClassDetail.model';

export class WowClassDetailMapper {
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
      playable_races: dto.playable_races.map(r => ({
        id: r.id,
        name: r.name 
      })),
      media_id: dto.media_id
    };
  }
}
