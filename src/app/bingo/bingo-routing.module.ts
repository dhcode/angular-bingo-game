import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewGameComponent } from './new-game/new-game.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewGameComponent
  },
  {
    path: 'game',
    component: GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BingoRoutingModule {
}
