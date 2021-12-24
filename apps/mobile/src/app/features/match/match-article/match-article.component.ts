import { environment } from './../../../../environments/environment.prod';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-article',
  templateUrl: './match-article.component.html',
  styleUrls: ['./match-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchArticleComponent implements OnInit {
  @Input() article: any;

  constructor() { }

  ngOnInit(): void {
    console.log('this is articles > ', this.article);
  }


  imageLinkGenerator(src: string): string {
    console.log('this is soource : ', src)
    return `${environment.storage}/uploads/posts/${src}`;
  }

  videoChecker(item) {
    return '<iframe src=https:' + item + '></iframe>'
  }
}
