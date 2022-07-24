import {Dictionary} from "./dictionary";

export interface Country extends Dictionary {
  cities: Dictionary[]
}
