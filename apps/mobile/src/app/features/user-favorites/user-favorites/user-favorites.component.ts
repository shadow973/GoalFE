
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LocalStore } from '@goal-front/shared';
import { environment } from 'apps/mobile/src/environments/environment';
import { Subscription } from 'rxjs';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-user-favorites',
  templateUrl: './user-favorites.component.html',
  styleUrls: ['./user-favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFavoritesComponent implements OnInit {
  private favsSub: Subscription;
  favorites: any[];

  constructor(
    private localStore: LocalStore,
    private modalService: ModalService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.favsSub = this.localStore.favorites$().subscribe((d: any[]) => {
      this.favorites = d;
      this.cd.markForCheck();
    });
  }

  ngOnDestroy() {
    this.favsSub.unsubscribe();
  }

  openModal() {
    this.modalService.openFavoritesModal().afterClosed().subscribe();
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  imageLinkGeneratorClub(id): string {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=48`;
  }

  imageLinkGeneratorChampionship(id): string {
    return `${environment.storage}/size/timthumb.php?src=/images/countries/flags/${id}.png&w=48`;
  }

  imageLinkGeneratorPlayer(id): string {
    return `${environment.storage}/size/timthumb.php?src=${id}&w=48`;
  }
}
