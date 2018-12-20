import { Component, OnDestroy, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {

public collection$: Observable<Prestation[]>; // convention de nommage terminer le nom par un $
public entetes: string[];
// public sub: Subscription; // souscription pour observable

  constructor(private ps: PrestationService) { // injection de la classe PrestationService
    // public accessible et html et ts vs private que dans ts

  }

  ngOnInit() {
    // this.collection = this.ps.collection; // dupliquer avec reference
    this.entetes = ['Type', 'Client', 'Nb Jours', 'Tjm HT', 'Total HT', 'Total TTC', 'State', ''];

  //  this.sub = this.ps.collection.subscribe(data => {
  //     this.collection = data;
  //   });

  this.collection$ = this.ps.collection$; // et on ajout un pipe asyn en html
  }
  ngOnDestroy(): void {
  // this.sub.unsubscribe();
  }

}
