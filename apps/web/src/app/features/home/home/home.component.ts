import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService } from '@goal-front/shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gridView: boolean;

  constructor(
    private metaService: MetaService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Goal.ge');
    this.metaService.generateTags({});
  }

  changeGrid(isGrid): void {
    this.gridView = isGrid;
  }

}
