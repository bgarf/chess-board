let {
  getHorizontalAndVerticalMoves,
  getAxisMovesByDirection,
  getNewXPostionFromLetter,
  getDiagonalMoves,
  isWithinBoardParameter
} = require('../js/PositionMovement')
let assert = require('chai').assert
let ChessBoard = require('../js/board.js');

describe('PositionMovement', function() {
  let board = new ChessBoard

  describe('#getHorizontalAndVerticalMoves', function() {
    it('should return the next positions directly next to the current postition, horizontally and vertically', function() {
      let result = getHorizontalAndVerticalMoves('B', 3, 1)
      let expectedMoves = [['B', 4], ['B', 2], ['C', 3], ['A', 3]]

      assert.deepEqual(result, expectedMoves)
    });

    it('should return the next positions up to a given distance from the current postition, horizontally and vertically', function() {
      let result = getHorizontalAndVerticalMoves('B', 3, 3)
      let expectedMoves = [
        ['B', 4], ['B', 5], ['B', 6], ['B', 2], ['B', 1],
        ['C', 3], ['D', 3], ['E', 3], ['A', 3]
      ]

      assert.deepEqual(result, expectedMoves)
    });
  });

  describe('#getDiagonalMoves', function() {
    it('should return the next positions directly next to the current postition, diagonally', function() {
      let result = getDiagonalMoves('B', 3, 1)
      let expectedMoves = [['C', 4], ['C', 2], ['A', 4], ['A', 2]]

      assert.deepEqual(result, expectedMoves)
    });

    it('should return the next positions up to a given distance from the current postition, diagonally', function() {
      let result = getDiagonalMoves('B', 3, 3)
      let expectedMoves = [['C', 4], ['D', 5], ['E', 6], ['C', 2], ['D', 1], ['A', 4], ['A', 2]]

      assert.deepEqual(result, expectedMoves)
    });
  });

  describe('#getNewXPostionFromLetter', function() {
    it('should return the x axia letter moved by a given amount', function() {
      let result = getNewXPostionFromLetter('A', 2)

      assert.equal(result, 'C')
    })

    it("should return the X when the number doesn't correspond to a letter", function() {
      let result = getNewXPostionFromLetter('A', -4)

      assert.equal(result, 'X')
    })
  })

  describe('#isWithinBoardParameter', function() {
    it('should return true if the x and y coordinates lie with the 8 x 8 board', function() {
      let result = isWithinBoardParameter('B', 3)

      assert.equal(result, true)
    });

    it('should return false if the x and y coordinates lie outside the 8 x 8 board', function() {
      let result = isWithinBoardParameter('I', 9)

      assert.equal(result, false)
    });
  });
});
