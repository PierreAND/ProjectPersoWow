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

export interface assetsImg{
  id: number;
  key: string;
  value: string;
  file_data_id: number;
}
export interface mediaDTO {
  
	_links: {
		self: {
			href: string
		}
	},
  assets: assetsImg[]
	id: 5

}

export interface ClassDetailSimpleDTO {
  id: number;
  name: string;
  power_type: SimplePowerType;
  specializations: SimpleSpecialization[];
  playable_races: SimplePlayableRace[];
}
