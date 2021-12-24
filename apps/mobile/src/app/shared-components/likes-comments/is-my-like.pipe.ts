import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isMyLike'
})
export class IsMyLikePipe implements PipeTransform {

  transform(likes: number[], userId: number): boolean {

    return !!userId && !!likes.find(num => userId === num);
  }

}
