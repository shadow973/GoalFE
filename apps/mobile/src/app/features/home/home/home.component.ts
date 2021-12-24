import { environment } from './../../../../environments/environment';
import { Subscription } from 'rxjs';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService } from '@goal-front/shared';
import { isPlatformBrowser } from '@angular/common';
import { EventReplayer } from 'preboot';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeSubMenuTabIndex = 1;
  gridView: boolean;
  domLoaded: boolean;
  public isSmallScreen;

  constructor(
    private metaService: MetaService,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: string,
    private eventReplayer: EventReplayer
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Goal.ge');
    this.metaService.generateTags({});


    if (isPlatformBrowser(this.platformId)) {
      this.domLoaded = true;
      this.eventReplayer.replayAll();
    }

    this.detectWindowWidth(window.innerWidth);
  }

  subMenuTabChange(e: number) {
    this.activeSubMenuTabIndex = e;
  }

  changeGrid(isGrid): void {
    this.gridView = isGrid;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.detectWindowWidth(event.target.innerWidth);
  }

  private detectWindowWidth(width: number){
    this.isSmallScreen = width < 576;
  }
}
