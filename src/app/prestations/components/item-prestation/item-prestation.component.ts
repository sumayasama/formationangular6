import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-item-prestation',
  templateUrl: './item-prestation.component.html',
  styleUrls: ['./item-prestation.component.scss']
})
export class ItemPrestationComponent implements OnInit {


  @Input() item: Prestation; // visible au parent : référence ou pointeur
  // ngonChanges verifie si la ref change mais pas la valeur (=/= ngdoCheck)

   public states = State ; // solution pipe
  // public states = Object.values(State) ; // solution js
  constructor(private ps: PrestationService) { }

  ngOnInit() {
  }
   changeState(event) {
   const state = event.target.value;
   this.ps.update(this.item, state);
  }
}
