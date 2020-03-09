let assert = require('chai').assert
let ChessBoard = require('../js/board.js');

const startingPositions =
    '{"A":{"1":"rook","2":"pawn","3":"","4":"","5":"","6":"","7":"pawn","8":"rook"},"B":{"1":"knight","2":"pawn","3":"","4":"","5":"","6":"","7":"pawn","8":"knight"},"C":{"1":"bishop","2":"pawn","3":"","4":"","5":"","6":"","7":"pawn","8":"bishop"},"D":{"1":"queen","2":"pawn","3":"","4":"","5":"","6":"","7":"pawn","8":"queen"},"E":{"1":"king","2":"pawn","3":"","4":"","5":"","6":"","7":"pawn","8":"king"},"F":{"1":"bishop","2":"pawn","3":"","4":"","5":"","6":"","7":"pawn","8":"bishop"},"G":{"1":"knight","2":"pawn","3":"","4":"","5":"","6":"","7":"pawn","8":"knight"},"H":{"1":"rook","2":"pawn","3":"","4":"","5":"","6":"","7":"pawn","8":"rook"}}'

describe('ChessBoard', function() {
  let board = new ChessBoard()

  afterEach(function() {
    board = new ChessBoard()
  })

  describe('#getCurrentState()', function() {

    it('should return a string representation of the coordinates object', function() {
      let state = board.getCurrentState()

      assert.typeOf(state, 'string');
      assert.equal(state, startingPositions)
    });

  });

  describe('#findPieceAtPosition()', function() {

    it('should return the piece at a given position', function() {
      let piece = board.findPieceAtPosition('A', 1)
      assert.equal(piece, 'rook')
    });

    it('should return an empty string if no piece is currently at that position', function() {
      let piece = board.findPieceAtPosition('A', 3)
      assert.equal(piece, '')
    });
  });

  describe('#movePiece()', function() {

    it('should move a piece to the new given position', function() {
      board.movePiece('A', 2, 'A', 3)

      assert.equal(board.coordinates['A'][3], 'pawn')
    });

    it("should remove the piece from it's currently position", function() {
      board.movePiece('A', 2, 'A', 3)

      assert.equal(board.coordinates['A'][2], '')
    });

    it("should remove any piece which exists in the new position", function() {
      board.movePiece('A', 2, 'A', 8)

      assert.equal(board.coordinates['A'][8], 'pawn')
    });
  });
});
