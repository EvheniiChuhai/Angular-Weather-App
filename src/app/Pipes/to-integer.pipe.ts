import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toInteger'
})
export class ToIntegerPipe implements PipeTransform {

  transform(value: string, ): number {
    return parseInt(value);
  }

}
