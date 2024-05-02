it('calls getMove() once', () => {
  const mockRandomGenerator = new RandomGenerator();

  const game = new RockPaperScissors(mockRandomGenerator);

  // We don't need the result value
  _result = game.getResult('scissors');

  // We assert getMove() was called once
  expect(mockRandomGenerator.getMove).toHaveBeenCalledTimes(1);
});
