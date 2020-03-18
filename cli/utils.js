function getPiece(board, x, y) {
    let piece = board.filter(piece => piece.x == x && piece.y == y)
    if (piece.length > 1) {
      throw new Error(`More than one piece exists in position ${x}${y}`)
    } else { 
      return piece[0]
    }
  }

module.exports = {
    getPiece
}