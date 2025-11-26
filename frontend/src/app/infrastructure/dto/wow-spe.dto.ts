export interface GlypheDTO {
  id: number;
  majeur: string;
  mineur: string;
  speId: number;
}

export interface TemplateDTO {
  id: number;
  opti1: string;
  opti2: string;
  speId: number;
}

export interface CycleDTO {
  id: number;
  monocible: string;
  zone: string;
  speId: number;
}

export interface SpecialisationDTO {
  id: number;
  glyphes: GlypheDTO[];
  templates: TemplateDTO[];
  cycles: CycleDTO[];
}
