import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFilter',
})
export class PipeFilterPipe implements PipeTransform {
  transform(value: any, search: string): any {
    if (!search) return value;
    return value.filter((val :any) => {
      return Object.keys(val).some(key => {
        return String(val[key]).toLowerCase().includes(search.toLowerCase());
      });
    });
  }
}
