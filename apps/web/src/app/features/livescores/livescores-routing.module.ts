import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivescoreComponent } from './livescore/livescore.component';

const routes: Routes = [
  {
    path: '',
    component: LivescoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivescoresRoutingModule { }
