import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-club-sidebar-players',
  templateUrl: './club-sidebar-players.component.html',
  styleUrls: ['./club-sidebar-players.component.scss']
})
export class ClubSidebarPlayersComponent implements OnInit {
  @Input('teamId') teamId: number;
  @Input() players: any;
  activeTabId: number;

  constructor() { }

  ngOnInit(): void {
    this.changeTab(1);
  }

  changeTab(tabIndex): void {
    this.activeTabId = tabIndex;
  }

}
