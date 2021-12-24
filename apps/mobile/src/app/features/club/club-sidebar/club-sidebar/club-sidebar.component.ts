import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-club-sidebar',
  templateUrl: './club-sidebar.component.html',
  styleUrls: ['./club-sidebar.component.scss']
})
export class ClubSidebarComponent implements OnInit {
  @Input() teamId: number;
  @Input() standings: any[];
  @Input() players: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
