import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'searchBold',
})
export class SearchBoldPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer){}
  transform(value: any, search: string): any {
    if (!search) return value;

    return value
      .filter((val: any) => {
        return val.text.toLowerCase().includes(search.toLowerCase());
      })
      .map((filter: any) => {
        const match = filter.text.match(new RegExp(search, 'gi'));
        return {
          text: filter.text.replace(new RegExp(search, 'gi'),(match: any) => '<b>' + match + '</b>'),
        };
      });
  }
}