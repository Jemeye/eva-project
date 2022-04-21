import {Area} from './area.model';
import {Aggrement} from './aggrement.model';
import {Activity} from './activity.model';

export interface profileUserSchool{
  notifyPrefer: string;
  area : [{
    area: string;
    resources: string;
    aggrement: string;
  }];
  result: string;
}

export interface profileContextSchool{

  campusSchool: [{
    name: string,
    location: string
  }]

  campusAggre: [{
    name: string,
    location: string
  }]

  temporal: {
    transport: string,
    outdoorActivity: string
  }

  environment: {
    transport: string,
    weather: string,
    humidity: string,
    noise: string
  }

  social: {
    transport: string,
    outdoorActivity: string
  }

  rule: {
    maxActivity: number;
    manual: string
  }

  structure: {
    resources: string,
    typeSpace: string
  }

  tecnology: {
    resources: string,
    room: string
  }
}

export interface School {
  _id:{
    $oid: ''
  }
  actividad_extracurricular?: any[];
  convenio?: Aggrement[];
  nombre: string;
  ubicacion: string;
  perfilUsuario?: profileUserSchool;
  perfilContexto?: profileContextSchool;
}


export interface DTOSchool{
  nombre: string;
  ubicacion: string;
}
