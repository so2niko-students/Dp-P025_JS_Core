function ticTacToeChecker(boardState) {
    const winner = isWon(boardState);
    if (winner[0]) {
        return winner[1];
    }

    return isExistEmptyCells(boardState) ? -1 : 0;
}

const oneRowArr = [].concat(...boardState);

function myConcat (firstArr, secondArr) {
    const firstArrLen = firstArr.length;//3
    const secondArrLen = secondArr.length;//4

    //[1, 2, 3]
    for (let i = 0; i < secondArrLen; i++) {
        firstArr[i + firstArrLen] = secondArr[i];
        //i = 0 [1, 2, 3, 44]
        //i = 1 [1, 2, 3, 44, 55]
    }

    return firstArr;
}

//myConcat([1, 2, 3], [44, 55, 66, 77])