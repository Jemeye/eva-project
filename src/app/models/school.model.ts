import {Area} from './area.model';
import {Subarea} from './subarea.model';
export interface School {
  id: string;
  title: string;
  images: string;
  schedule: string;
  location: string;
  area: Area;
  subarea:Subarea;
  description: string;
}
