import { mediaDTO } from '../dto/wow-details-class.dto';
import { ClassImage } from '../../domain/models/wowClassDetail.model';


export class WowClassImgMapper {
  static fromDetailDTO(dto: mediaDTO): ClassImage {
    return {
      id: dto.id,
      assets: dto.assets.map(s => ({
        id: s.id,
        key: s.key,
        value: s.value,
        file_data_id: s.file_data_id

      }))
    }
  }
}