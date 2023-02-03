import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
  transform(value: any,limit:number): any {
    return value.length <=limit ? value : value.substring(0, limit).concat('...');
  }
}
