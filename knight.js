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
// console.log(gameBoard);


class Square {
    constructor(coord, parent) {
        this.coord = coord;
        this.parent = parent;
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







function getPossibleNextMoves(currentSquare, visited) {

    const directions = [
        [1, 2], [2, 1], [2, -1], [1, -2],
        [-1, -2], [-2, -1], [-2, 1], [-1, 2]
    ];

    let possibleNextMoves = [];

    for (let i = 0; i < directions.length; i++) {
        let coord = [currentSquare.coord[0] + directions[i][0], currentSquare.coord[1] + directions[i][1]];

        if (isInBoard(coord) && !isVisited(coord, visited)) {
            const child = new Square(coord, currentSquare);
            possibleNextMoves.push(child);
        }
    }
    
    function isInBoard(coord) {
        return (coord[0] >= 0 && coord[0] < 8) && (coord[1] >= 0 && coord[1] < 8);
    }

    function isVisited(coord, visited) {
        return visited.some(square => square.coord[0] === coord[0] && square.coord[1] === coord[1]);
    }

    return possibleNextMoves;
}

console.log(getPossibleNextMoves({coord: [0, 0], parent: null}, []));