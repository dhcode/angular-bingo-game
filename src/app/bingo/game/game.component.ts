import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { BingoGame } from '../bingo-game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  game: BingoGame;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.game = this.gameService.getCurrentGame();
  }

  toggleWord(word: string) {
    if (this.game.foundWords.includes(word)) {
      this.game.removeFoundWord(word);
    } else {
      this.game.foundWord(word);
    }
    this.gameService.saveGame(this.game);
  }

}
