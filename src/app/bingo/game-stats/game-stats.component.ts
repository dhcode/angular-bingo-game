import { Component, Input, OnInit } from '@angular/core';
import { BingoGame } from '../bingo-game';

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.component.html',
  styleUrls: ['./game-stats.component.scss']
})
export class GameStatsComponent implements OnInit {

  @Input() game: BingoGame;

  constructor() {
  }

  ngOnInit() {
  }

  get gameStats() {
    if (!this.game) {
      return {
        total: 0,
        foundWords: 0,
        possible: 0,
        complete: false,
        horizontal: 0,
        vertical: 0,
        diagonal: 0
      };
    } else {
      return this.game.getBingoStats();
    }
  }

}
