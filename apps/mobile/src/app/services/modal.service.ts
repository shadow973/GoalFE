import { Injectable, Injector } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserFavoriteModalComponent } from '../features/user-favorites/user-favorite-modal/user-favorite-modal.component';
import { UserAuthComponent } from '../features/user/user-auth/user-auth.component';
import { UserEditComponent } from '../features/user/user-edit/user-edit.component';
import { MatchComparePlayersModalComponent } from '../features/match/match-compare-players-modal/match-compare-players-modal.component';

@Injectable({
    providedIn: 'root',
})
export class ModalService {

    constructor(
        private matDialog: MatDialog
    ) { }

    openLoginModal(): any {
        return this.matDialog.open(UserAuthComponent, {
            hasBackdrop: true,
            position: {
                top: '0'
            }
        });
    }

    openEditProfileModal(): any {
        return this.matDialog.open(UserEditComponent, {
            hasBackdrop: true,
            position: {
                top: '0'
            }
        });
    }

    openFavoritesModal(): any {
        return this.matDialog.open(UserFavoriteModalComponent, {
            hasBackdrop: true,
            position: {
                bottom: '0'
            }
        });
    }

    openComparePlayersModal(chosenPlayers, playerToChange = undefined): any {
        return this.matDialog.open(MatchComparePlayersModalComponent, {
            hasBackdrop: true,
            position: {
                bottom: '0'
            },
            data: {
                players: chosenPlayers,
                mustChangePlayer: playerToChange
            }
        });
    }
}
