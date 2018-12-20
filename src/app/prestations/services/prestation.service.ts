import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Injectable({
  providedIn: 'root' // inject ce service au niveau du root par défault depuis angular 6
  // avant il fallait le mattre dans le provider de app.module
})
// a injecter dans le constructeur de la class qui veut l'utiliser
export class PrestationService {

  private _collection$: Observable<Prestation []>; // alias
  private itemsCollection: AngularFirestoreCollection<Prestation>; // Observable a chaud

  constructor(
    private afs: AngularFirestore // service acces des donnes sur firebase cloud
  ) {
    // this.collection = fakePrestions; // getter ou setter ?  c'est JS qui sache quoi prendre
    this.itemsCollection = afs.collection<Prestation>('prestations'); // interroger base (collections prestations)
    this.collection$ = this.itemsCollection.valueChanges().pipe(
    map(data => { // tableau des items
        return data.map((item) => {
            return  new Prestation(item); // chaque item
        });
    })
  ); // transformer les donnees de json a notre type de modele;
  }
  // récupere une collection
  public get collection$(): Observable<Prestation []> { // get / set : propriétés utiliser au lieu de getX et setX classiques
    return this._collection$;
  }
  // modifier une collection
  public set collection$( col: Observable<Prestation []>) {
  this._collection$ = col;
  }
  // ajouter un item dan la collection
  public add(item: Prestation) {
    // this.collection.push(new Prestation(item)); // faudra faire un new parcequ'item est un simple obj js
  }

  // update un item dans la collection
  public update(item, state) {
  item.state = state;
  // console.log(item);

  }
  // recuperer un item depuis la collection
}
