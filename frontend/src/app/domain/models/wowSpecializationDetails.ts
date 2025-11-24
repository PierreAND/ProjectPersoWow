import { LocalizedString } from "../../infrastructure/dto/wow-details-class.dto";
import { GenderDescription } from "../../infrastructure/dto/wow-specialization-details.dto";

export interface SpeDetails {
  id: number;
  name: LocalizedString;
  playableClassName: LocalizedString;
  playableClassId: number;
  genderDescription: GenderDescription;
  mediaId: number;
  role: {
    type: string;
    name: LocalizedString;
  };
  powerType: {
    id: number;
    name: LocalizedString;
  };
  primaryStat: {
    type: string;
    name: LocalizedString;
  };
}