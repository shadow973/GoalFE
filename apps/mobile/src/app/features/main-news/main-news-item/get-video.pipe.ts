import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getVideo'
})
export class GetVideoPipe implements PipeTransform {

  transform(videoDataString: string): string {
    return `https://v2.api.goal.ge/news-video/${videoDataString.match(/\d+/g)[0]}`;
  }

}
