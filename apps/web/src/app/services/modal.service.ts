import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserAuthComponent } from '../features/user/user-auth/user-auth.component';
import { UserEditComponent } from '../features/user/user-edit/user-edit.component';

@Injectable()
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
}
