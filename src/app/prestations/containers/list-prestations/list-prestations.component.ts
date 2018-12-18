import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {

public collection: Prestation[];

  constructor(private ps: PrestationService) { // injection de la classe PrestationService
    // public accessible et html et ts vs private que dans ts

  }

  ngOnInit() {
    this.collection = this.ps.collection; // dupliquer avec reference
  }

}
