// Create function to find the invalid moves from a given position
function isValidMove(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }
//  Create function to find the valid moves from a given position
function getValidMoves([x, y]) {
    const moves = [
      [-2, 1], [-1, 2], [1, 2], [2, 1],
      [2, -1], [1, -2], [-1, -2], [-2, -1]
    ];
    const validMoves = [];
    for (const [dx, dy] of moves) {
      const newX = x + dx;
      const newY = y + dy;
      if (isValidMove(newX, newY)) {
        validMoves.push([newX, newY]);
      }
    }
    return validMoves;
}
// Create function to find the shortest path from a given position to the end position
  function findShortestPath(start, end) {
    const queue = [[start]];
    const visited = new Set([start.toString()]);
    // Create a while loop that runs until the queue is empty
    while (queue.length > 0) {
      const path = queue.shift();
      const [x, y] = path[path.length - 1];
      if (x === end[0] && y === end[1]) {
        return path;
      }
    //  Create a for loop to iterate through all valid moves
      const validMoves = getValidMoves([x, y]);
      for (const [newX, newY] of validMoves) {
        if (!visited.has([newX, newY].toString())) {
          visited.add([newX, newY].toString());
          queue.push([...path, [newX, newY]]);
        }
      }
    }
    return null; // No valid path found
  }
// Create function to find the number of moves and the path from a given position to the end position
function knightMoves(start, end) {
    const winningPath = findShortestPath(start, end);
    if (winningPath) {
      return {
        numberOfMoves: winningPath.length - 1,
        path: winningPath
      };
    } else {
      return "No valid path found.";
    }
  }
// Play the game
  const game1 = knightMoves([0, 0], [1, 2]);
  console.log(`Game 1: You made it in: ${game1.numberOfMoves} move`);
  console.log(`Winning path: ${JSON.stringify(game1.path)}`);
  const game2 = knightMoves([0, 0], [3, 3]);
  console.log(`Game 2: You made it in: ${game2.numberOfMoves} moves`);
  console.log(`Winning path: ${JSON.stringify(game2.path)}`);
  const game3 = knightMoves([3, 3], [0, 0]);
  console.log(`Game 3: You made it in: ${game3.numberOfMoves} moves`);
  console.log(`Winning path: ${JSON.stringify(game3.path)}`);
  const game4 = knightMoves([0, 0], [7, 7]);
  console.log(`Game 4: You made it in: ${game4.numberOfMoves} moves`);
  console.log(`Winning path: ${JSON.stringify(game4.path)}`);
  
  