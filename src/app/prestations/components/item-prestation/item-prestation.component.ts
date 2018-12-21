import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-prestation',
  templateUrl: './item-prestation.component.html',
  styleUrls: ['./item-prestation.component.scss']
})
export class ItemPrestationComponent implements OnInit {
public faTrash = faTrash;

  @Input() item: Prestation; // visible au parent : référence ou pointeur
  // ngonChanges verifie si la ref change mais pas la valeur (=/= ngdoCheck)

   public states = State ; // solution pipe
  // public states = Object.values(State) ; // solution js
  constructor(private ps: PrestationService) { }

  ngOnInit() {
  }
   changeState(event) {
   const state = event.target.value;
   // façon firebase
   this.ps.update(this.item, state).then(() => {
     console.log('woohoo! state mis à jour');
   });
   // façon http
  //  this.ps.update(this.item, state).subscribe((reponse) => {
  //   to do
  //  });
  }

  delete() {
       // façon firebase
    this.ps.delete(this.item).then((data) => {
      console.log(data);

    });
       // façon http
      //  this.ps.delete(this.item).subscribe((reponse) => {
      // to do
      // });
  }
  detail() {
    // enregistrer la ligne dans le service
    this.ps.presta$.next(this.item);


  }
}
