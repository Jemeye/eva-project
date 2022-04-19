import {Question} from './question.model';
export interface Test {
  id: string;
  title: string;
  questions: Question [];
  available: boolean;
}
