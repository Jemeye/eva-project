import {Subarea} from './subarea.model';
export interface Area {
  id: string ;
  name: string;
  description: string;
  subareas: Subarea[];
  images: string;
}
