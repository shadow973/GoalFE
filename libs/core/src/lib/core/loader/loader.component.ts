import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() type: 'small' | 'normal' | 'big' = 'normal';
  @Input() position: 'top' | 'center' | 'bottom' = 'center';

  constructor() { }

  ngOnInit(): void {
  }

}
