import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  wordPool: string[] = [];
  size = 5;

  constructor(private gameService: GameService,
              private router: Router) {
  }

  ngOnInit() {
    this.gameService.loadWordPool().subscribe(wordPool => {
      this.wordPool = wordPool;
    });
  }

  addToWordPool(word: string) {
    this.wordPool.push(word);
  }

  createGame() {
    this.gameService.createGame(this.wordPool, this.size);
    this.router.navigate(['bingo/game']);
  }

  isValid(): boolean {
    return this.size * this.size <= this.wordPool.length;
  }

}
