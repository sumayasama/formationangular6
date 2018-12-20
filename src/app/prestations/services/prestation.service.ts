import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';

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

  // add presta
  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
    // return this.http.post('urlapi/addprestation', item);
  }


  update(item: Prestation, state?: State): Promise<any> {
    const presta  = {...item};
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch('urlapi/prestationupdate/'+item.id, presta);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`urlapi/prestations/delete/${item.id}`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`urlapi/prestations/get/${id}`);
  }
}
