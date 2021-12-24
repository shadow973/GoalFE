import { Subscription } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {

  activeTabIndex = 1;
  @Output() tabChanged = new EventEmitter();
  @Input() collapsed: boolean;

  constructor() { }

  ngOnInit(): void {}

  changeTab(index: number): void {
    if (this.activeTabIndex == index) return;
    this.tabChanged.emit(index);
    this.activeTabIndex = index;
  }

}
