// function knightMoves(start, end) {
//     const nextPossibleMoves = getNextPossibleMoves(start);
//     // console.log(nextPossibleMoves);

//     // const nextMovesQ = [];
//     // nextMovesQ.push(...nextPossibleMoves);
//     // const allPathsHeights = [];

//     // while (nextMovesQ !== 0) {
//     //     let pathHeight = 0;
//     //     while(!nextMovesQ.includes(end)) {
//     //         let first = nextMovesQ[0];
//     //         pathHeight++;
//     //         knightMoves(first, end);
//     //     }
//     //     allPathsHeights.unshift(pathHeight);
//     //     nextMovesQ.shift();
//     // }

//     // const _findShortestPath = function(moves, end) {
//     //     const Q = [...moves];
//     //     let pathHeight = 0;
 
//     //     while(Q.length > 0) {
//     //         if (Q.includes(end)) {
//     //             console.log(pathHeight);
//     //             return;
//     //         }
//     //         Q.push(...getNextPossibleMoves(Q[0]));
//     //         Q.shift();
//     //         pathHeight++;
//     //     }
//     //     return 'Something aint right'

//     // }
//     // _findShortestPath(nextPossibleMoves, end);
   
//     // nextMovesQ.push(...nextPossibleMoves);

//     // while(nextMovesQ.length !== 0) {
//     //     let firstInQ = nextMovesQ.shift();
//     //     if (firstInQ === end) {
//     //         console.log(firstInQ);
//     //         return;
//     //     } else {
//     //         knightMoves(firstInQ, end, nextMovesQ);
//     //     }
//     // }




//     // if (start === end) {
//     //     // reconstruct the path
//     // }
// }

// knightMoves([0, 0], [3, 3]);

function createBoard(size) {
    let board = [];

    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            let square = [j, i];
            row.push(square)
        }
        board.push(row);
    }
    return board;
}

const gameBoard = createBoard(8);
console.log(gameBoard);


class Square {
    constructor(coord, prev) {
        this.coord = coord;
        this.prev = prev;
    }
}


// function findShortestPath(start, end) {
//     let q = [...start];


//     while (q.length > 0) {
//         let currentPosition = q.shift();

//         if (currentPosition.coord === end.coord) {
//             // found the final position
//             // reconstruct the path

//         }
//     }
// }







// function getNextPossibleMoves(currentPos) {
//     const nextPossibleMoves = [
//         [currentPos[0] + 1, currentPos[1] + 2],
//         [currentPos[0] + 2, currentPos[1] + 1],
//         [currentPos[0] - 1, currentPos[1] - 2],
//         [currentPos[0] - 2, currentPos[1] - 1],
//         [currentPos[0] + 1, currentPos[1] - 2],
//         [currentPos[0] - 2, currentPos[1] + 1],
//         [currentPos[0] + 2, currentPos[1] - 1],
//         [currentPos[0] - 1, currentPos[1] + 2]
//     ].filter(move => (move[0] >= 0 && move[0] <= 7) && (move[1] >= 0) && move[1] <= 7);

//     return nextPossibleMoves;
// }