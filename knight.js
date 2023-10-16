function knightMoves(start, end) {
    const possibleNextMoves = [
        [start[0] + 1, start[1] + 2],
        [start[0] + 2, start[1] + 1],
        [start[0] - 1, start[1] - 2],
        [start[0] - 2, start[1] - 1],
        [start[0] + 1, start[1] - 2],
        [start[0] - 2, start[1] + 1],
        [start[0] + 2, start[1] - 1],
        [start[0] - 1, start[1] + 2]
    ].filter(move => (move[0] >= 0 && move[0] <= 7) && (move[1] >= 0) && move[1] <= 7);

    const nextMovesQ = [];
    nextMovesQ.push(...possibleNextMoves);

    while(nextMovesQ.length !== 0) {
        if (nextMovesQ[0] === end) {
            // do something here to end everything
            return;
        } else {
            // so it is recursive
        }
    }
    // console.log(nextMovesQ)
}

knightMoves([2, 1]);