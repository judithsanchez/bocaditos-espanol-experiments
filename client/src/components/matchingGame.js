export class MatchingGame {
  constructor(list) {
    this.firstCard = undefined;
    this.secondCard = undefined;
    this.foundMatches = 0;
    this.attempts = 0;
    this.foundElements = [];
    this.gameStatus = 'in progress';
    this.gameBoard = this.shuffleElements(
      this.addCardNumber(this.duplicateElements(list))
    );
  }

  // It uses the spread syntax to iterate over the original list twice.
  // Then using the spread syntax again to combine the two lists into a single list.
  duplicateElements(list) {
    return [...list, ...list];
  }

  addCardNumber(array) {
    const modifiedArray = array.map((element, index) => {
      const modifiedElement = { ...element };
      modifiedElement.dataindex = `data${index}`;
      return modifiedElement;
    });
    return modifiedArray;
  }

  // Implementation of the Fisher-Yates
  shuffleElements(list) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
    return list;
  }

  getCardId(element) {
    if (!this.firstCard && !this.secondCard) {
      this.firstCard = element;
      return;
    }

    if (this.firstCard && !this.secondCard) {
      this.secondCard = element;
    }
  }

  checkMatch(firstElement, secondElement) {
    if (firstElement === null || secondElement === null) {
      return;
    }

    this.attempts += 1;

    if (firstElement === secondElement) {
      this.foundElements.push(firstElement);
      this.foundMatches += 1;

      if (this.foundMatches >= this.gameBoard.length / 2) {
        this.gameStatus = 'won';
      }
      this.firstCard = null;
      this.secondCard = null;
      return true;
    }

    this.firstCard = null;
    this.secondCard = null;
    return false;
  }
}
