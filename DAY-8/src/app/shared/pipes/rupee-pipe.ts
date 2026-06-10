import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'rupee',
  standalone:false
})
export class RupeePipe implements PipeTransform {

  transform(value:number):string {

    return new Intl.NumberFormat(
      'en-IN',
      {
        style:'currency',
        currency:'INR'
      }
    ).format(value);

  }

}