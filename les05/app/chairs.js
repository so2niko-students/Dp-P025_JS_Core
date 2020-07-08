// let chairsOccupation = [['xxx', 3], ['xxxxx', 6], ['xxxxxx', 9], ['xx', 8]];
let chairsOccupation = [['xxx', 3], ['xxxxx', 6], ['xxxxxx', 9], ['xx', 8]];
// let neededChairsAmount = +prompt('Скільки вам потрібно стільців');
let neededChairsAmount = 11;

function findFreeChairs(arr, neededSits) {
    if (neededSits === 0) {
        return 'Game On';
    }

    let totalFreeChairsAmount = 0;

    let emptySits = [];
    for (let i = 0; i < arr.length; i++) {

        let freeChairs = arr[i][1] - arr[i][0].length;

        if (neededSits > 0) {

            if (freeChairs > 0) {

                totalFreeChairsAmount += freeChairs;

                if (neededSits > freeChairs) {
                    emptySits.push(freeChairs);

                } else {
                    emptySits.push(neededSits);

                }

                neededSits -= freeChairs;
            } else {
                emptySits.push(0);
            }

        } else {
            return emptySits;
        }
    }

    if (neededSits > 0) {
        return 'Not enough!';
    } else {
        return emptySits;
    }
}

let result = findFreeChairs(chairsOccupation, neededChairsAmount);
console.log('Result is =>', result);