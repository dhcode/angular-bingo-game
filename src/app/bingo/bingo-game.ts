export class BingoGame {
  id: number;
  words: string[] = [];
  size = 5;
  foundWords: string[] = [];
  startedAt: number = null;

  static generateGame(wordPool: string[], size = 5) {
    const wordCount = size * size;
    if (wordPool.length < wordCount) {
      throw new Error('Word pool to small');
    }

    const game = new BingoGame();
    game.size = size;

    for (let i = 0; i < wordCount; i++) {
      const wpIndex = Math.floor(Math.random() * (wordPool.length - 1));
      game.words.push(wordPool.splice(wpIndex, 1)[0]);
    }

    return game;
  }

  foundWord(word: string) {
    if (!this.words.includes(word)) {
      throw new Error('Unknown word');
    }

    if (this.foundWords.includes(word)) {
      return;
    }

    this.foundWords.push(word);
  }

  removeFoundWord(word: string) {
    const index = this.foundWords.indexOf(word);
    if (index !== -1) {
      this.foundWords.splice(index, 1);
    }
  }

  startGame() {
    this.startedAt = new Date().getTime();
  }

  getBingoStats() {
    const stats = {
      total: 0,
      foundWords: this.foundWords.length,
      possible: this.size + this.size + 2,
      complete: false,
      horizontal: this.getHorizontalBingos().length,
      vertical: this.getVerticalBingos().length,
      diagonal: (this.getDiagonalBingo(1) ? 1 : 0) + (this.getDiagonalBingo(-1) ? 1 : 0)
    };
    stats.total = stats.horizontal + stats.vertical + stats.diagonal;
    stats.complete = stats.total === stats.possible;
    return stats;
  }

  /**
   * Returns all rows of the game board
   * @returns {Array}
   */
  getRows(): string[][] {
    const result = [];
    for (let row = 0; row < this.size; row++) {
      result.push(this.words.slice(row * this.size, row * this.size + this.size));
    }
    return result;
  }

  /**
   * Finds all found horizontal bingos
   * @returns {Array}
   */
  getHorizontalBingos(): string[][] {
    return this.getRows().filter(rowWords => rowWords.every(word => this.foundWords.includes(word)));
  }

  /**
   * Finds all found vertical bingos
   * @returns {Array}
   */
  getVerticalBingos(): string[][] {
    const result = [];
    for (let col = 0; col < this.size; col++) {
      const colWords = this.words.filter((word, i) => i % this.size === col);
      if (colWords.every(word => this.foundWords.includes(word))) {
        result.push(colWords);
      }
    }
    return result;
  }

  /**
   * Returns the word of a diagonal if all are found
   * @param direction either 1 for top-left to bottom-right or -1 for top-right to bottom-left
   */
  getDiagonalBingo(direction: number): string[] {
    const dWords = this.words.filter((word, i) => i % (this.size + direction) === 0
      && (direction === 1 || direction === -1 && i !== 0 && i !== this.words.length - 1));
    if (dWords.every(word => this.foundWords.includes(word))) {
      return dWords;
    }
    return null;
  }
}
