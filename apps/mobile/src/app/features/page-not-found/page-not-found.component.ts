import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService } from '@goal-front/shared';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private metaService: MetaService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('404 - Goal.ge');
    this.metaService.generateTags( {
      title: '404 - Goal.ge',
      description: '404 Not Found',
      slug: 'not-found'
    });


  }

}
