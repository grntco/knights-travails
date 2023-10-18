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
        this.parent = parent || null;
    }
}

function getPossibleNextMoves(currentSquare, visited) {

    const possibleNextMoves = [];
    const directions = [
        [1, 2], [2, 1], [2, -1], [1, -2],
        [-1, -2], [-2, -1], [-2, 1], [-1, 2]
    ];

    // Create children of currentSquare with only the next squares that are within the gameboard and have not yet been visited
    for (let i = 0; i < directions.length; i++) {
        let coord = [currentSquare.coord[0] + directions[i][0], currentSquare.coord[1] + directions[i][1]];

        if (isInBoard(coord) && !isVisited(coord, visited)) {
            const child = new Square(coord, currentSquare);
            possibleNextMoves.push(child);
        }
    }
    
    // Test whether coordinates are within the bounds of the gameboard or not
    function isInBoard(coord) {
        return (coord[0] >= 0 && coord[0] < 8) && (coord[1] >= 0 && coord[1] < 8); // change to boardSize instead of 8 at some point
    }

    // Test whether coordinates have been visited or not
    function isVisited(coord, visited) {
        return visited.some(square => square.coord[0] === coord[0] && square.coord[1] === coord[1]);
    }

    return possibleNextMoves;
}

function knightMoves(start, end) {
    const rootSquare = new Square(start);
    let q = [rootSquare];
    let visited = [rootSquare];
    
    while(q.length > 0) {
        let current = q[0];
        if (current.coord[0] === end[0] && current.coord[1] === end[1]) {
            let path = [];
            let node = current;
            while(node) {
                path.unshift(node.coord);
                node = node.parent;
            }
            console.log(`=> You made it in ${path.length} moves! Here's your path:`);
            path.forEach(coord => {
                console.log(`[${coord.toString().split(',').join(', ')}]`)
            });
            return;
        }
        const children = getPossibleNextMoves(current, visited);
        q.push(...children);
        visited.push(...children);
        q.shift();
    }
}

knightMoves([7, 7], [3, 3]);
