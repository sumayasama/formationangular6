import { State } from '../enums/state.enum';
import { PrestationI } from '../interfaces/prestation-i';

export class Prestation implements PrestationI {
  id: string;
  typePresta: string;
  client: string;
  nbJours = 0;
  tjmHT = 500;
  tauxTva = 20;
  state = State.OPTION;
  comment: string;

  constructor (fields?: Partial<Prestation>) { // a partir du  moment ou
    // il reponds partiellement au
    // modele il est accepté d'ou 'partial de type
    // prestation et '?' c a dire c'est optionel
    if (fields) {
      Object.assign(this, fields); // copier fields dans l'objet
    }
  }

  totalHT(): number {
    console.log('HT called');
  return this.tjmHT * this.nbJours;
  }

  totalTTC(tva?: number): number {
    console.log('TTC called');
  if (!tva) {
  return this.totalHT() * (1 + this.tauxTva / 100);
}
if (tva <= 0) {
return this.totalHT();
}
return this.totalHT() * (1 + tva / 100) ;
}


}
