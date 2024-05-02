// Returns a random move from the array ['rock', 'paper', 'scissors']
class RandomGenerator {
    getMove() {
        const moves = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * moves.length);

        return moves[randomIndex];
    }
}

  // Gets a player move as input and computes the result
  // after comparing with the random move
class RockPaperScissors {
    constructor(randomGenerator) {
        this.randomGenerator = randomGenerator;
    }

    getResult(playerMove) {
        const randomMove = this.randomGenerator.getMove();

        const result = // here compute the result (omitted for brevity)

        return result;
    }
}


it('wins the game', () => {
    const randomGenerator = // some fake random generator that always returns 'paper'
    const game = new RockPaperScissors(randomGenerator);

    expect(game.getResult('scissors')).toBe('win');
});


it('wins the game', () => {
    // an object with a property .getMove, which is a function
    const fakeRandomGenerator = {
        getMove: () => 'paper'
    }

    fakeRandomGenerator.getMove; // [Function: getMove]
    fakeRandomGenerator.getMove(); // 'paper'

    const game = new RockPaperScissors(fakeRandomGenerator);

    expect(game.getResult('scissors')).toBe('win');
});