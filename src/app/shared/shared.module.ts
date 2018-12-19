import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauComponent } from './components/tableau/tableau.component';
import { AddRowComponent } from './components/add-row/add-row.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
  declarations: [TotalPipe, StateDirective, TableauComponent, AddRowComponent],
  exports: [TotalPipe, StateDirective, TableauComponent, AddRowComponent, FontAwesomeModule, RouterModule, TemplatesModule],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    TemplatesModule
  ]
})
export class SharedModule { }
