import { SpeDetails } from "../../domain/models/wowSpecializationDetails";
import { SpecializationDTO } from "../dto/wow-specialization-details.dto";

export class SpecializationMapper {
  static fromDTO(dto: SpecializationDTO): SpeDetails {
    return {
      id: dto.id,
      name: dto.name,
      playableClassName: dto.playable_class.name,
      playableClassId: dto.playable_class.id,
      genderDescription: dto.gender_description,
      mediaId: dto.media.id,
      role: {
        type: dto.role.type,
        name: dto.role.name,
      },
      powerType: {
        id: dto.power_type.id,
        name: dto.power_type.name,
      },
      primaryStat: {
        type: dto.primary_stat_type.type,
        name: dto.primary_stat_type.name,
      },
    };
  }
}