let cells = document.querySelectorAll('.game-cell');
// console.log(cells);

let turn = 'X';
localStorage.setItem('turn', turn);

for (cell of cells) {
    cell.addEventListener('click', markBox);
}

let playerX = [];
let player0 = [];

function markBox(event) {
    console.log('box marked');
    if (localStorage.getItem('turn') === 'X' ) {
        event.target.textContent = 'X';
        turn = '0';
        localStorage.setItem('turn', turn);
        playerX.push(event.target.dataset.coordinateX + event.target.dataset.coordinateY);
        if (verifyWin(playerX)) {
            alert('Player X won!')
        };
    } else if (localStorage.getItem('turn') === '0' ) {
        event.target.textContent = '0';
        turn = 'X';
        localStorage.setItem('turn', turn);
        player0.push(event.target.dataset.coordinateX + event.target.dataset.coordinateY);
        if (verifyWin(player0)) {
            alert('Player 0 won!')
        };
    }
    console.log('px: ', playerX, 'p0: ', player0);
}

function buildLines() {
    let gameBoard = document.getElementById('game-board');
    let n = gameBoard.dataset.winSize;
    // on x axis, 0 to n
    let lineString = '';
    let allLines = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            lineString += i.toString() + j.toString()
        }
        allLines.push(lineString);
        lineString = '';
    }
    // on y axis, 0 to n
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            lineString += j.toString() + i.toString()
        }
        allLines.push(lineString);
        lineString = '';
    }
    // diagonal SE
    let i = 0;
    let j = 0;
    let vertical = 0;
    let startPosition = 0;
    for (let startPosition = 0; startPosition < n; startPosition++) {
        i = startPosition;
        for (let vertical = 0; vertical < n; vertical++) {
            if (i<n && j<n) {
                lineString += i.toString() + j.toString();
                i += 1;
                j += 1;
            }
        }
        if (lineString !== '') {
            allLines.push(lineString);
            lineString = '';
            }
    }
    // diagonal NE
    i = 0;
    j = 0;
    vertical = 0;
    startPosition = 0;
    lineString = '';
    for (let startPosition = 0; startPosition < n; startPosition++) {
        i = startPosition;
        j = n-1;
        for (let vertical = 0; vertical < n; vertical++) {
            if (i<n && j>=0) {
                lineString += i.toString() + j.toString();
                i += 1;
                j -= 1;
            }
        }
        if (lineString.length === n*2) {
            allLines.push(lineString);
            lineString = '';
            } else {
            lineString = '';
        }
    }
    console.log(allLines);
    return allLines;
}

function verifyWin(playerList) {
    console.log(playerList);
    let gameBoard = document.getElementById('game-board');
    let train = gameBoard.dataset.winSize;
    let winningLines = buildLines();
    let possible = [];
    if (playerList.length >= train) {
        for (winningLine of winningLines) {
            possible = [];
            for (box of playerList) {
                if (winningLine.includes(box)) {
                    possible.push(box);
                    if (possible.length >= train) {
                        console.log('winwinwin');
                        return true
                    }
                }
            }
        }
    }
}
