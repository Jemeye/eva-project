import {Subarea} from './subarea.model';
export interface Area {
  id: string ;
  title: string;
  images: string;
  description: string;
  subareas: Subarea[];
}
