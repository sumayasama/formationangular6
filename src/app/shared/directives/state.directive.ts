import { Directive, Input, OnInit, HostBinding, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

@Input() appState: State;
@HostBinding('class') nomClass: string;
  constructor() {
  }
  ngOnChanges(): void {
   this.nomClass = this.formatClass(this.appState);
  }
// enlever les acccents et les espaces et mettre tout en miniscule
  private formatClass(state: State): string {
return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}` ;
  }
}
