import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strip'
})
export class StripPipe implements PipeTransform {

  constructor() { }

  transform(html: any): string {
    if (!html) return;
    return html.replace(/\\(.)/mg, "$1");
  }
}
