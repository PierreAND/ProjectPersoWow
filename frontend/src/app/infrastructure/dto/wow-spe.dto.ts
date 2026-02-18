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

export interface BiSDTO {
  id: number;
  tete:string;
  collier:string;
  epaule:string;
  cape:string;
  torse:string;
  bracelet:string;
  gants:string;
  ceinture:string;
  pantalon:string;
  bottes:string;
  anneaux1:string;
  anneaux2:string;
  bijoux1:string;
  bijoux2:string;
  arme1:string;
  arme2:string;
  arme3:string;
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
  bestInSlots: BiSDTO[];
}
