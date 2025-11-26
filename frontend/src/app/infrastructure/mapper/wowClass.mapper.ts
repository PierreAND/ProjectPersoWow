import { ClassIndexDTO } from '../dto/wow-classes.dto';
import { Classes } from '../../domain/models/wowClass.model';

export class WowClassMapper {
  static fromIndexDTO(dto: ClassIndexDTO): Classes[] {
    return dto.classes.map(c => ({
      id: c.id,
      name: c.name
    }));
  }
}