import {Area} from './area.model';
import {Subarea} from './subarea.model';
export interface Aggrement {
  id: string;
  name: string;
  description: string;
  schedule: string;
  location: string;
  area: Area;
  subarea:Subarea;
  cost: number;
  resources: string[];
  frequency: string;
  season: string;
  images: string;
}
