import { Pipe, PipeTransform } from '@angular/core';
import * as _moment from 'moment';
import 'moment/locale/ka'

@Pipe({
  name: 'toDate'
})
export class ToDatePipe implements PipeTransform {

  constructor() { }

  transform(date: any, format: string = 'DD MMM YYYY, HH:mm'): string {
    return _moment(date).format(format);
  }
}
