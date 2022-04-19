import {Area} from './area.model';
import {Subarea} from './subarea.model';
export interface Activity {
  id?: string ;
  name: string;
  description: string;
  schedule? : string;
  area?: Area;
  subarea?: Subarea;
  maximStudents: number;
  resources: string[];
  images: string;
}
