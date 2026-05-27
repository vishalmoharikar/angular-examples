import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanpipe',
})
export class BooleanpipePipe implements PipeTransform {
  transform(value: string | number | boolean, ...args: unknown[]): unknown {
    if (value === 'true' || value === 1 || value === true) {
      return 'Yes';
    } else if (value === 'false' || value === 0 || value === false) {
      return 'No';
    } else {
      return null;
    }
  }
}
