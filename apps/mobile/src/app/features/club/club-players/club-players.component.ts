import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { SlugifyPipe } from 'libs/shared/src/lib/pipes/slugify.pipe';

@Component({
  selector: 'app-club-players',
  templateUrl: './club-players.component.html',
  styleUrls: ['./club-players.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClubPlayersComponent implements OnInit {
  @Input() players: any[];
  PlayerType: any = {
    Goalkeeper: {
      title: 'მეკარეები',
      data: []
    },
    Defender: {
      title: 'მცველები',
      data: []
    },
    Midfielder: {
      title: 'ნახევარმცველები',
      data: []
    },
    Attacker: {
      title: 'თავდამსხმელები',
      data: []
    }
  };

  constructor(
    private slugifyPipe: SlugifyPipe,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.generatePlayers();
  }

  private generatePlayers() {
    this.PlayerType.Goalkeeper.data = [];
    this.PlayerType.Defender.data = [];
    this.PlayerType.Midfielder.data = [];
    this.PlayerType.Attacker.data = [];

    for (let i = 0; i < this.players.length; i++) {
      var obj = {};
      this.players[i].data = JSON.parse(this.players[i].data);

      obj['type'] = this.players[i].data.position ? this.players[i].data.position.data.name : '';
      obj['name'] = this.players[i].data.player.data.common_name;
      obj['player_number'] = this.players[i].data.number;
      obj['age'] = this.players[i].data.player.data.birthdate;
      obj['goals'] = this.players[i].data.goals ? this.players[i].data.goals : 0;
      obj['image_path'] = this.players[i].data.player.data.image_path;
      obj['assists'] = this.players[i].data.assists ? this.players[i].data.assists : 0;
      obj['matchs'] = this.players[i].data.lineups + this.players[i].data.substitutes_on_bench;
      obj['country_id'] = this.players[i].data.player.data.country_id;
      obj['player_id'] = this.players[i].data.player.data.player_id;
      obj['saves'] = this.players[i].data.saves ? this.players[i].data.saves : 0
      obj['slug'] = this.slugifyPipe.transform(this.players[i].fullname) ? this.slugifyPipe.transform(this.players[i].fullname) : 0

      switch (obj['type']) {
        case 'Goalkeeper':
          this.PlayerType.Goalkeeper.data.push(obj)
          break;
        case 'Defender':
          this.PlayerType.Defender.data.push(obj)
          break;
        case 'Midfielder':
          this.PlayerType.Midfielder.data.push(obj)
          break;
        case 'Attacker':
          this.PlayerType.Attacker.data.push(obj)
          break;
      }
    }

    this.cd.markForCheck();
  }


}
