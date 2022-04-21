import {Area} from './area.model';
import {Subarea} from './subarea.model';
export interface Aggrement {
  _id:{
    $oid: ''
  }
  nombre: string;
  descripcion: string;
  horario: string;
  ubicacion: string;
  area: string;
  subarea: string;
  costo: number;
  recursos: string;
  frecuencia: string;
  temporada: string;
  imagen?: string;
}

export interface DTOAggrenment extends Omit<Aggrement, 'imagen'>{

}

export interface DTOCreateAggrenment extends Omit<Aggrement, '_id' |'imagen'>{

}
