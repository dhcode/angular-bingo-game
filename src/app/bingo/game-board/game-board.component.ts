import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BingoGame } from '../bingo-game';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  @Input() game: BingoGame;

  @Output() onFound = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  getBoardRows() {
    if (!this.game) {
      return [];
    }
    return this.game.getRows();
  }

  isFound(word: string) {
    return this.game.foundWords.includes(word);
  }

  setFound(word: string) {
    this.onFound.next(word);
  }

}
