import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BingoRoutingModule } from './bingo-routing.module';
import { NewGameComponent } from './new-game/new-game.component';
import { GameComponent } from './game/game.component';
import { GameService } from './game.service';
import { FormsModule } from '@angular/forms';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameStatsComponent } from './game-stats/game-stats.component';

@NgModule({
  imports: [
    CommonModule,
    BingoRoutingModule,
    FormsModule
  ],
  declarations: [NewGameComponent, GameComponent, GameBoardComponent, GameStatsComponent],
  providers: [GameService]
})
export class BingoModule { }
