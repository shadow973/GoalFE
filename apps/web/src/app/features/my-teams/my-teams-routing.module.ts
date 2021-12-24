import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTeamsComponent } from './my-teams/my-teams.component';

const routes: Routes = [
  {
    path: '',
    component: MyTeamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTeamsRoutingModule { }
