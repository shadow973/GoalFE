import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'apps/web/src/environments/environment';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() video: any;

  constructor() { }

  ngOnInit(): void { }

  
  imageLinkGenerator(fileName: string): string {
    return `${environment.storageurlResizerPoster}${fileName}&w=450`;
  }

}
