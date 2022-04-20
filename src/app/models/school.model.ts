import {Area} from './area.model';
import {Aggrement} from './aggrement.model';
import {Activity} from './activity.model';
export interface School {
  id: string;
  name: string;
  location: string;
  address: string;
  preferNotifyArea: string;
  preferNotifyResourse: string;
  preferNotifyAggrement: string;
  formResults: string;
  nameSchoolHeadquarters: string;
  locationSchoolHeadquarters: string;
  aggrements: Aggrement[];
  activities: Activity[];
  areas: Area[];
  outdoorActivities: string;
  climate: string;
  transportAccess: string;
  humidity:string;
  noise:string;
  coexistenceManual:string;
  maximActivities: number;
  techAdaptationRooms:string;
  technologicalResources:string;
  TypeSpaces:string;
  resources: string[];

  schedule: string;
  description: string;
  images: string;
}
