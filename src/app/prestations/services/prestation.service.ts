import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Injectable({
  providedIn: 'root' // inject ce service au niveau du root par défault depuis angular 6
  // avant il fallait le mattre dans le provider de app.module
})
// a injecter dans le constructeur de la class qui veut l'utiliser
export class PrestationService {

  private _collection$: Observable<Prestation []>; // alias
  private itemsCollection: AngularFirestoreCollection<Prestation>; // Observable a chaud
  // observable chaud (subject de type behaviorsubject: stock la derniere valeur contrairement au subject)
  public presta$: BehaviorSubject<Prestation> = new BehaviorSubject(null);
  constructor(
    private afs: AngularFirestore, // service acces des donnes sur firebase cloud
    private http: HttpClient
  ) {
    // façon firebase
    // this.collection = fakePrestions; // getter ou setter ?  c'est JS qui sache quoi prendre
    this.itemsCollection = afs.collection<Prestation>('prestations'); // interroger base (collections prestations)
    this.collection$ = this.itemsCollection.valueChanges().pipe(
  // parentthese non obligatoir car un seul paramete, return implicite car une seul instruction
   //   map(data => data.map (item => new Prestation(item)))
     map(data => { // tableau des items
      this.presta$.next(new Prestation(data[0])); // recuperer le 1er elt
        return data.map((item) => {
            return  new Prestation(item); // chaque item
        });
    })
  ); // transformer les donnees de json a notre type de modele;


  //  façon htttp le retour est un observable, un subscribe est obligatoire pour executer les requetes crud
  // this._collection$ = this.http.get<Prestation[]>(`${URL_API}/prestations}`).pipe(
  //   map(data => { // tableau des items
  //     return data.map((item) => {
  //         return  new Prestation(item); // chaque item
  //     });
  // })
  // );
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
    // return this.http.post(`${URL_API}/prestations}`, item);
  }


  update(item: Prestation, state?: State): Promise<any> {
    const presta  = {...item};
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch(`${URL_API}/prestations}`, presta); //ou PUT (modification de l'objet entier vs âtch modif partielle)
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`${URL_API}/prestations}/${item.id}`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get<Prestation>(`${URL_API}/prestations}/${id}`); // on oublie pas le susbscribe
  }
}
