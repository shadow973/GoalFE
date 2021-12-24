import { ChangeDetectorRef } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-match-compare-players-item',
  templateUrl: './match-compare-players-item.component.html',
  styleUrls: ['./match-compare-players-item.component.scss']
})
export class MatchComparePlayersItemComponent implements OnInit {
  @Input() player: any;
  @Input() players: any[];

  constructor(
    private cd: ChangeDetectorRef,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  openModal() {
    this.cd.detach();
    this.modalService.openComparePlayersModal(this.players, this.player).afterClosed().subscribe(() => {
      setTimeout(() => {
        this.cd.detectChanges();
      }, 200);
    });
  }
}
