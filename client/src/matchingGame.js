export default class MatchingGame {
  constructor(list) {
    this.matches = [];
    this.board = this.shuffle(this.duplicate(list));
  }

  checkMatch(a, b) {
    if (a === b) {
      this.matches.push(a);
      return true;
    }
    return false;
  }

  duplicate(list) {
    return [...list, ...list];
  }

  shuffle(list) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
    return list;
  }
}
