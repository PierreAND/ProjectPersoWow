export interface LocalizedString {
  en_US: string;
  fr_FR: string;
  [key: string]: string;
}

export interface SimplePowerType {
  id: number;
  name: LocalizedString; 
}

export interface SimpleSpecialization {
  id: number;
  name: LocalizedString;
}

export interface SimplePlayableRace {
  id: number;
  name: LocalizedString;
}

export interface media {
  id: number
}

export interface ClassDetailSimpleDTO {
  id: number;
  name: string;
  power_type: SimplePowerType;
  specializations: SimpleSpecialization[];
  playable_races: SimplePlayableRace[];
  media_id: media;
}
