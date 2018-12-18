import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { fakePrestions } from './fake-prestations';

@Injectable({
  providedIn: 'root' // inject ce service au niveau du root par défault depuis angular 6
  // avant il fallait le mattre dans le provider de app.module
})
// a injecter dans le constructeur de la class qui veut l'utiliser
export class PrestationService {

  private _collection: Prestation []; // alias
  constructor() {
    this.collection = fakePrestions; // getter ou setter ?  c'est JS qui sache quoi prendre
  }
  // récupere une collection
  public get collection(): Prestation[] { // get / set : propriétés utiliser au lieu de getX et setX classiques
    return this._collection;
  }
  // modifier une collection
  public set collection( col: Prestation[]) {
  this._collection = col;
  }
  // ajouter un item dan la collection
  // update un item dans la collection
  // recuperer un item depuis la collection
}
