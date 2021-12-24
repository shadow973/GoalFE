import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService } from '@goal-front/shared';
import { EventReplayer } from 'preboot';

@Component({
  selector: 'app-livescore',
  templateUrl: './livescore.component.html',
  styleUrls: ['./livescore.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LivescoreComponent implements OnInit {

  constructor(
    private metaService: MetaService,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: string,
    private eventReplayer: EventReplayer
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Livescore - Goal.ge');
    this.metaService.generateTags({
      title: 'Livescore - Goal.ge',
      description: 'გაეცანი ლაივ ანგარიშებს და მატჩების შედეგებს ჩვენ საიტის დახმარებით. Goal.ge - ყველაზე დიდი სპორტული პორტალი საქართველოში.',
      slug: 'livescore'
    });

    if (isPlatformBrowser(this.platformId)) {
      this.eventReplayer.replayAll();
    }
  }

}
