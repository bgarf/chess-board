let {colours} = require('./enum')

// function getPossiblePawnMoves(x, y, colour) {
//     console.log(colour);
//     console.log('-------');
//     switch (colour) {
//       case colours.WHITE:
//           console.log(colours.WHITE)
//         // getPawnMoves(x, y, 1, 2)
//         break
//       case colours.BLACK: 
//         console.log(x + y);
//         // getPawnMoves(x, y, -1, -2)
//         break
//       default:
//         console.log('No colour provided!')
//         //TODO: should be exception?
//     } 
// }

// getPossiblePawnMoves('a', 2, 'white')


let {
    // getHorizontalAndVerticalMoves,
    // getNewXPostionFromLetter,
    // getDiagonalMoves,
    isWithinBoardParameter
  } = require('./PositionMovement')
  
//   let {colours} = require('./Board')
  
//   function getPossibleKingMoves(x, y) {
//     return getDiagonalMoves(x, y, 1).concat(getHorizontalAndVerticalMoves(x, y, 1))
//   }
  
//   function getPossibleBishopMoves(x, y) {
//     return getDiagonalMoves(x, y, 8)
//   }
  
//   function getPossibleRookMoves(x, y) {
//     return getHorizontalAndVerticalMoves(x, y, 8)
//   }
  
//   function getPossibleQueenMoves(x, y) {
//     return getDiagonalMoves(x, y, 8).concat(getHorizontalAndVerticalMoves(x, y, 8))
//   }
  
  function getPossiblePawnMoves(x, y, colour) {
    console.log(colour);
    console.log('-------');
    switch (colour) {
      case colours.WHITE:
        getPawnMoves(x, y, 1, 2)
        break
      case colours.BLACK: 
        console.log(x + y);
        getPawnMoves(x, y, -1, -2)
        break
      default:
        console.log('No colour provided!')
        //TODO: should be exception?
    } 
  }
  
  function getPawnMoves(x, y, one, two) {
    let oneForward = y + one
    if (y == two) {
      return [[x, oneForward], [x, y + two]]
    } else if (isWithinBoardParameter(x, oneForward)) {
      return [[x, oneForward]]
    } else {
      return []
    }
  }
  
//   function getPossibleKnightMoves(x, y) {
//     let allMoveCombinations = [[-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1]]
  
//     return allMoveCombinations.map(function(coords) {
//       return [getNewXPostionFromLetter(x, coords[0]), y + coords[1]]
//     }).filter(coords => isWithinBoardParameter(coords[0], coords[1]))
//   }
  
  module.exports = {
    // getPossibleKingMoves,
    getPossiblePawnMoves,
    // getPossibleKnightMoves,
    // getPossibleBishopMoves,
    // getPossibleRookMoves,
    // getPossibleQueenMoves
  }
  