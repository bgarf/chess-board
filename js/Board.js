class ChessBoard {
  constructor() {
    this.coordinates = {
      A: {
        1: 'rook', 2: 'pawn', 3: '', 4: '', 5: '', 6: '', 7: 'pawn', 8: 'rook'
      },
      B: {
        1: 'knight', 2: 'pawn', 3: '', 4: '', 5: '', 6: '', 7: 'pawn', 8: 'knight'
      },
      C: {
        1: 'bishop', 2: 'pawn', 3: '', 4: '', 5: '', 6: '', 7: 'pawn', 8: 'bishop'
      },
      D: {
        1: 'queen', 2: 'pawn', 3: '', 4: '', 5: '', 6: '', 7: 'pawn', 8: 'queen'
      },
      E: {
        1: 'king', 2: 'pawn', 3: '', 4: '', 5: '', 6: '', 7: 'pawn', 8: 'king'
      },
      F: {
        1: 'bishop', 2: 'pawn', 3: '', 4: '', 5: '', 6: '', 7: 'pawn', 8: 'bishop'
      },
      G: {
        1: 'knight', 2: 'pawn', 3: '', 4: '', 5: '', 6: '', 7: 'pawn', 8: 'knight'
      },
      H: {
        1: 'rook', 2: 'pawn', 3: '', 4: '', 5: '', 6: '', 7: 'pawn', 8: 'rook'
      }
    }
  }

  getCurrentState() {
    return JSON.stringify(this.coordinates)
  }

  setCoordinatePosition(x, y, piece) {
    this.coordinates[x][y] = piece
  }

  findPieceAtPosition(x, y) {
    return this.coordinates[x][y]
  }

  movePiece(currentX, currentY, newX, newY) {
    let piece = this.findPieceAtPosition(currentX, currentY)

    this.setCoordinatePosition(currentX, currentY, '')
    this.setCoordinatePosition(newX, newY, piece)
  }
}

module.exports = ChessBoard;
