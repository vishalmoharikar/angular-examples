import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderpipe',
})
export class GenderpipePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value === 'm') {
      return 'Male';
    } else if (value === 'f') {
      return 'Female';
    } else {
      return null;
    }
  }
}
