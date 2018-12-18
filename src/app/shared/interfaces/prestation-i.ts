import { State } from '../enums/state.enum';

export interface PrestationI {
  id: string;
  typePresta: string;
  client: string;
  nbJours: number;
  tjmHT: number;
  tauxTva: number;
  state: State;
  comment: string;

  totalHT(): number ;
  totalTTC(): number ;
}
