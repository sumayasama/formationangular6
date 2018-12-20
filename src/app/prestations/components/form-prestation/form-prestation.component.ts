import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {

@Output() nItem: EventEmitter<Prestation> = new EventEmitter(); // listner
public states = State;
public form: FormGroup; // group de formControl
private init = new Prestation();

  constructor(
    private fb: FormBuilder // service instanciation des form
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm () {
this.form = this.fb.group({
typePresta: [
  this.init.typePresta,
Validators.required], // cree automatiquement une instance de formControl  avec son validateur,
// nom de formcontrol = nom attribut du modele pour la validation
client: [
  this.init.client,
Validators.compose([Validators.required, Validators.minLength(3)])], // cas plusieurs validateur du formcontrol
nbJours: [this.init.nbJours],
tjmHT: [this.init.tjmHT],
tauxTva: [this.init.tauxTva],
state: [this.init.state],
comment: [this.init.comment]
});
  }

  public onSubmit() {
this.nItem.emit(this.form.value);
}
}
