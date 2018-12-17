import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundTwoDigits'
})
export class RoundTwoDigitsPipe implements PipeTransform {

  transform(value: any): any {
      return Math.round(value);
  }

}
