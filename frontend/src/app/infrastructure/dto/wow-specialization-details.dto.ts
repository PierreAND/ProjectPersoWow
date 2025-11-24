export interface LocalizedString {
  en_US: string;
  fr_FR: string;
  [key: string]: string;
}

export interface GenderDescription {
  male: LocalizedString;
  female: LocalizedString;
}

export interface PlayableClassReference {
  key: { href: string };
  name: LocalizedString;
  id: number;
}

export interface MediaReference {
  key: { href: string };
  id: number;
}

export interface Role {
  type: string;
  name: LocalizedString;
}

export interface PowerType {
  key: { href: string };
  name: LocalizedString;
  id: number;
}

export interface PrimaryStat {
  type: string;
  name: LocalizedString;
}

export interface SpecializationDTO {
  _links: {
    self: { href: string };
  };
  id: number;
  playable_class: PlayableClassReference;
  name: LocalizedString;
  gender_description: GenderDescription;
  media: MediaReference;
  role: Role;
  power_type: PowerType;
  primary_stat_type: PrimaryStat;
}