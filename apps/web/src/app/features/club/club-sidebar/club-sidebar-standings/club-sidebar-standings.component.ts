import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-club-sidebar-standings',
  templateUrl: './club-sidebar-standings.component.html',
  styleUrls: ['./club-sidebar-standings.component.scss']
})
export class ClubSidebarStandingsComponent implements OnInit {
  @Input('teamId') teamId: number;
  @Input() standings: any[];

  constructor() { }

  ngOnInit(): void {
  }
}
