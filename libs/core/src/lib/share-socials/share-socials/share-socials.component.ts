import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
  Inject,
  PLATFORM_ID,
} from '@angular/core';

@Component({
  selector: 'app-share-socials',
  templateUrl: './share-socials.component.html',
  styleUrls: ['./share-socials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareSocialsComponent implements OnInit {
  windowUrl = '';
  @Input() extraTitle: string;
  @Input() extraImage: string;
  @Input() disableAutoMeta = false;
  private environment: any;
  visible: boolean;

  constructor(
    @Inject('env') env: any,
    @Inject(PLATFORM_ID) private platformId: string
    ) {
    this.environment = env;
  }

  ngOnInit(): void {
    this.visible = isPlatformBrowser(this.platformId);
    this.windowUrl = this.environment.domain + window.location.pathname;
    console.log('this is window url : ', this.windowUrl)
  }
}
