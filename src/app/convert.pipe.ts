import { Pipe, PipeTransform } from '@angular/core';
import { basename } from 'path';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, targetUnits: string): any {
    if (!value) {
      return '';
    }
    switch (targetUnits) {
      case 'km':
        return value * 1.6;
      case 'm':
        return value * 1.6 * 1000;
      case 'cm':
        return value * 1.6 * 1000 * 1000;
      default:
        throw new Error('target unit is not supported');
    }
  }

}
