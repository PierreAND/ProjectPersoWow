import { LocalizedString, media } from "../../infrastructure/dto/wow-details-class.dto";

export interface PowerType {
  id: number;
  name: LocalizedString;
}

export interface Specialization {
  id: number;
  name: LocalizedString;
}

export interface PlayableRace {
  id: number;
  name: LocalizedString;
}

export interface ClassDetail {
  id: number;
  name: string;
  power_type: PowerType;
  specializations: Specialization[];
  playable_races: PlayableRace[];
  media_id: media;
}
