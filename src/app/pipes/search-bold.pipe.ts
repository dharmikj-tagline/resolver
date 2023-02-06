import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBold',
})
export class SearchBoldPipe implements PipeTransform {
  transform(value: any, search: string): any {
    if (!search) return value;

    return value
      .filter((val: any) => {
        return val.text.toLowerCase().includes(search.toLowerCase());
      })
      .map((filter: any) => {
        const match = filter.text.match(new RegExp(search, 'gi'));
        return {
          text: filter.text.replace(new RegExp(search, 'gi'),'<b>' + match[0] + '</b>'),
        };
      });
  }
}