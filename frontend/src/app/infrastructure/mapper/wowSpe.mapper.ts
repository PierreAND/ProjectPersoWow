import { SpecialisationDTO, GlypheDTO, TemplateDTO, CycleDTO } from '../dto/wow-spe.dto';
import { Specialisation, Glyphe, Template, Cycle } from '../../domain/models/wowSpeDetails.model';

export class SpecialisationMapper {
  static fromDTO(dto: SpecialisationDTO): Specialisation {
    return new Specialisation(
      dto.id,
      dto.glyphes?.map(g => this.mapGlyphe(g)) ?? [],
      dto.templates?.map(t => this.mapTemplate(t)) ?? [],
      dto.cycles?.map(c => this.mapCycle(c)) ?? [],
    );
  }

  private static mapGlyphe(dto: GlypheDTO): Glyphe {
    return new Glyphe(
      dto.id,
      this.cleanString(dto.majeur),
      this.cleanString(dto.mineur),
      dto.speId,
    );
  }

  private static mapTemplate(dto: TemplateDTO): Template {
    return new Template(
      dto.id,
      this.cleanString(dto.opti1),
      this.cleanString(dto.opti2),
      dto.speId,
    );
  }

  private static mapCycle(dto: CycleDTO): Cycle {
    return new Cycle(
      dto.id,
      dto.monocible,
      dto.zone,
      dto.speId,
    );
  }


  private static cleanString(str: string): string {
    return str.replace(/^"|"$/g, '').trim();
  }
}
