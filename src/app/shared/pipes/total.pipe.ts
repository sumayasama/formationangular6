import { Pipe, PipeTransform } from '@angular/core';
import { Prestation } from '../models/prestation.model';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Prestation, args?: number): number {
    if (value) {
      return args  ? value.totalTTC(args) :  value.totalHT() ;
    }
  }

}
