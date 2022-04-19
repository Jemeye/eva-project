import {Criterion} from './criterion.model';
import {Option} from './option.model';
export interface Question {
  id: string;
  question: string;
  options: Option[];
  criterion: Criterion;
  type: string; // S/N, importancia etc//
}
