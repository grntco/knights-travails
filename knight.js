class Square {
    constructor(coord, parent) {
        this.coord = coord;
        this.parent = parent || null;
    }
}

function knightMoves(start, end) {
    if (!isInBoard(start) || !isInBoard(end)) {
        console.log('=> Please provide start and end coordinates with x and y values equal to or greater than 0 and less than or equal to 7.')
    }

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

    function getPossibleNextMoves(currentSquare, visited) {
        const possibleNextMoves = [];
        const directions = [
            [1, 2], [2, 1], [2, -1], [1, -2],
            [-1, -2], [-2, -1], [-2, 1], [-1, 2]
        ];

        for (let i = 0; i < directions.length; i++) {
            let coord = [currentSquare.coord[0] + directions[i][0], currentSquare.coord[1] + directions[i][1]];
    
            if (isInBoard(coord) && !isVisited(coord, visited)) {
                const child = new Square(coord, currentSquare);
                possibleNextMoves.push(child);
            }
        }
        
        return possibleNextMoves;
    }

    function isInBoard(coord) {
        return (coord[0] >= 0 && coord[0] < 8) && (coord[1] >= 0 && coord[1] < 8);
    }

    function isVisited(coord, visited) {
        return visited.some(square => square.coord[0] === coord[0] && square.coord[1] === coord[1]);
    }
}

knightMoves([0, 0], [3, 3]);
knightMoves([0, 0], [7, 7]);
knightMoves([7, 7], [3, 3]);
knightMoves([1, 7], [-1, 0]);