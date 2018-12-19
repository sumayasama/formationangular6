import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { fakeClients } from './fake-clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _collection: Client []; // alias
  constructor() {
    this.collection = fakeClients;
  }
  public get collection(): Client[] {
    return this._collection;
  }
  public set collection( col: Client[]) {
  this._collection = col;
  }

  public update(item, state) {
  item.state = state;

}
}
