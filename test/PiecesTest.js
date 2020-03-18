let assert = require('chai').assert
let {
  getPossibleKingMoves,
  getPossiblePawnMoves,
  getPossibleKnightMoves,
  getPossibleBishopMoves,
  getPossibleRookMoves,
  getPossibleQueenMoves
} = require('../cli/Pieces')

describe('Pieces', function() {

  describe('#getPossibleKingMoves', function() {

    it('should show all possible moves the king can make if all moves are within the board perimeter', function() {
      let moves = getPossibleKingMoves('E', 5)
      let expectedMoves = [[ 'F', 6 ], [ 'F', 4 ], [ 'D', 6 ], [ 'D', 4 ], ['E', 6 ], [ 'E', 4 ], [ 'F', 5 ], [ 'D', 5 ]]

      assert.deepEqual(moves, expectedMoves)
    });

    it('should return all possible moves within board perimeter', function() {
      let moves = getPossibleKingMoves('A', 1)
      let expectedMoves = [['B', 2], ['A', 2], ['B', 1]]

      assert.deepEqual(moves, expectedMoves)
    });
  });

  describe('#getPossiblePawnMoves', function() {

    it('should return all possible moves for a pawns first move', function() {
      let moves = getPossiblePawnMoves('D', 2)
      let expectedMoves = [[ 'D', 3 ], [ 'D', 4 ]]

      assert.deepEqual(moves, expectedMoves)
    });

    it('should return all possible moves for a pawns subsequent moves', function() {
      let moves = getPossiblePawnMoves('D', 3)
      let expectedMoves = [[ 'D', 4 ]]

      assert.deepEqual(moves, expectedMoves)
    });

    it('should return no moves for a pawns when it has reached the other side of the board', function() {
      let moves = getPossiblePawnMoves('D', 8)
      let expectedMoves = []

      assert.deepEqual(moves, expectedMoves)
    });
  });

  describe('#getPossibleKnightMoves', function() {

    it('should return all possible moves for a knight if all moves are within the board perimeter', function() {
      let moves = getPossibleKnightMoves('D', 4)
      let expectedMoves = [[ 'C', 6 ], [ 'E', 6 ], ['F', 5], ['F', 3], [ 'E', 2 ], [ 'C', 2 ], ['B', 3], ['B', 5]]

      assert.deepEqual(moves, expectedMoves)
    });

    it('should return all possible moves for a knight within the board perimeter', function() {
      let moves = getPossibleKnightMoves('H', 8)
      let expectedMoves = [[ 'G', 6], [ 'F', 7 ]]

      assert.deepEqual(moves, expectedMoves)
    });

  });

  describe('#getPossibleBishopMoves', function() {

    it('should return all possible moves for a knight if all moves are within the board perimeter', function() {
      let moves = getPossibleBishopMoves('D', 4)
      let expectedMoves = [
        ['E', 5], ['F', 6], ['G', 7], ['H', 8], ['E', 3], ['F', 2], ['G', 1],
        ['C', 5], ['B', 6], ['A', 7], ['C', 3], ['B', 2], ['A', 1]
      ]
      assert.deepEqual(moves, expectedMoves)
    });

  });

  describe('#getPossibleRookMoves', function() {

    it('should return all possible moves for a rook if all moves are within the board perimeter', function() {
      let moves = getPossibleRookMoves('C', 3)
      let expectedMoves = [
        ['C', 4], ['C', 5], ['C', 6], ['C', 7], ['C', 8], ['C', 2], ['C', 1],
        ['D', 3], ['E', 3], ['F', 3], ['G', 3], ['H', 3], ['B', 3], ['A', 3]
      ]
      assert.deepEqual(moves, expectedMoves)
    });

  });

  describe('#getPossibleQueenMoves', function() {

    it('should return all possible moves for a queen if all moves are within the board perimeter', function() {
      let moves = getPossibleQueenMoves('D', 4)
      let expectedMoves = [
        ['E', 5], ['F', 6], ['G', 7], ['H', 8], ['E', 3], ['F', 2], ['G', 1],
        ['C', 5], ['B', 6], ['A', 7], ['C', 3], ['B', 2], ['A', 1],
        ['D', 5], ['D', 6], ['D', 7], ['D', 8], ['D', 3], ['D', 2], ['D', 1],
        ['E', 4], ['F', 4], ['G', 4], ['H', 4], ['C', 4], ['B', 4],
        ['A', 4]
      ]
      assert.deepEqual(moves, expectedMoves)
    });

  });
});
