import { Injectable } from '@angular/core';
import { BingoGame } from './bingo-game';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class GameService {

  constructor(private localStorageService: LocalStorageService,
              private http: Http) {
  }

  loadWordPool(): Observable<string[]> {
    return this.http.get('assets/words.json').map(response => response.json());
  }

  createGame(wordPool: string[], size = 5): BingoGame {

    const game = BingoGame.generateGame(wordPool, size);
    game.id = this.generateNewGameId();

    this.localStorageService.set('game_' + game.id, game);
    this.setCurrentGameId(game.id);

    return game;
  }

  saveGame(game: BingoGame) {
    console.log('save game', game);
    this.localStorageService.set('game_' + game.id, game);
  }

  getGameById(id: number): BingoGame {
    const game = this.localStorageService.get('game_' + id);
    return Object.assign(new BingoGame(), game);
  }

  getCurrentGame(): BingoGame {
    const id = this.getCurrentGameId();
    if (!id) {
      return null;
    }
    return this.getGameById(id);
  }

  generateNewGameId(): number {
    let index = this.localStorageService.get('currentGameIndex') as number || 0;
    index++;
    this.localStorageService.set('currentGameIndex', index);
    return index;
  }

  setCurrentGameId(id: number) {
    this.localStorageService.set('currentGameId', id);
  }

  getCurrentGameId(): number {
    return this.localStorageService.get('currentGameId') as number;
  }

}
