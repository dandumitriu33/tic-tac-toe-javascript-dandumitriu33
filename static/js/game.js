function main() {
    localStorage.setItem('turn', 'X');

    function setClickListener() {
        let cells = document.querySelectorAll('.game-cell');
        for (cell of cells) {
            cell.addEventListener('click', markBox);
        }
    }

    setClickListener();
    let playerXPlacements = [];
    let player0Placements = [];
    let playerXLines = [];
    let player0Lines = [];


    function markBox(event) {
        if (event.target.textContent === 'X' || event.target.textContent === '0') {
            alert('Box already checked. Please try again');
        } else {
            console.log('box marked');
            let coordX = event.target.dataset.coordinateX;
            let coordY = event.target.dataset.coordinateY;
            if (localStorage.getItem('turn') === 'X') {
                event.target.textContent = 'X';
                playerXPlacements.push(coordX + coordY);
                createPlayerXLines(coordX, coordY);
                checkPlayerXWin();
                localStorage.setItem('turn', '0');
            } else if (localStorage.getItem('turn') === '0') {
                event.target.textContent = '0';
                player0Placements.push(coordX + coordY);
                createPlayer0Lines(coordX, coordY);
                checkPlayer0Win();
                localStorage.setItem('turn', 'X');
            }
        }
    }


    document.getElementById('retry-button').addEventListener("click", tryAgain);

    function tryAgain() {
        let cells = document.querySelectorAll('.game-cell');
        console.log('try clicked');
        for (cell of cells) {
            cell.textContent = '';
        }
        playerXPlacements = [];
        player0Placements = [];
        localStorage.setItem('turn', 'X');
    }


    function createPlayerXLines(coordX, coordY) {
        let gameBoard = document.getElementById('game-board');
        let maxWidth = parseInt(gameBoard.dataset.colNum) - 1;
        let maxHeight = parseInt(gameBoard.dataset.rowNum) - 1;
        let winLineLength = parseInt(gameBoard.dataset.winSize);
        coordX = parseInt(coordX);
        coordY = parseInt(coordY);
        // create N
        let lineNorth = [];
        for (let i = 0; i < winLineLength; i++) {
            if ((coordY - i).toString() < 0) {
                break;
            } else {
                lineNorth.push(coordX.toString() + (coordY - i).toString());
            }
            if (lineNorth.length === winLineLength) {
                playerXLines.push(lineNorth);
                console.log('n: ', lineNorth);
            }
        }
        // create NE
        let lineNorthEast = [];
        for (let i = 0; i < winLineLength; i++) {
            if ((coordX + i).toString() > maxWidth || (coordY - i).toString() < 0) {
                break;
            } else {
                lineNorthEast.push((coordX + i).toString() + (coordY - i).toString());
            }
            if (lineNorthEast.length === winLineLength) {
                playerXLines.push(lineNorthEast);
                console.log('ne: ', lineNorthEast);
            }
        }
        // create E
        let lineEast = [];
        for (let i = 0; i < winLineLength; i++) {
            if ((coordX + i).toString() > maxWidth) {
                break;
            } else {
                lineEast.push((coordX + i).toString() + coordY.toString());
            }
            if (lineEast.length === winLineLength) {
                playerXLines.push(lineEast);
                console.log('e: ', lineEast);
            }
        }
        // create SE
        let lineSouthEast = [];
        for (let i = 0; i < winLineLength; i++) {
            if ((coordX + i).toString() > maxWidth || (coordY + i).toString() > maxHeight) {
                break;
            } else {
                lineSouthEast.push((coordX + i).toString() + (coordY + i).toString());
            }
            if (lineSouthEast.length === winLineLength) {
                playerXLines.push(lineSouthEast);
                console.log('se: ', lineSouthEast)
            }
        }
        // create S
        let lineSouth = [];
        for (let i = 0; i < winLineLength; i++) {
            if (coordY + i > maxHeight) {
                break;
            } else {
                lineSouth.push(coordX.toString() + (coordY + i).toString());
            }
            if (lineSouth.length === winLineLength) {
                playerXLines.push(lineSouth);
                console.log('s: ', lineSouth)
            }
        }
        // create SW
        let lineSouthWest = [];
        for (let i = 0; i < winLineLength; i++) {
            if ((coordX - i) < 0 || (coordY + i) > maxHeight) {
                break;
            } else {
                lineSouthWest.push((coordX - i).toString() + (coordY + i).toString());
            }
            if (lineSouthWest.length === winLineLength) {
                playerXLines.push(lineSouthWest);
                console.log('sw: ', lineSouthWest)
            }
        }
        // create W
        let lineWest = [];
        for (let i = 0; i < winLineLength; i++) {
            if ((coordX - i) < 0) {
                break;
            } else {
                lineWest.push((coordX - i).toString() + coordY.toString());
            }
            if (lineWest.length === winLineLength) {
                playerXLines.push(lineWest);
                console.log('w: ', lineWest);
            }
        }
        // create NW
        let lineNorthWest = [];
        for (let i = 0; i < winLineLength; i++) {
            if ((coordX - i) < 0 || (coordY - i) < 0) {
                break;
            } else {
                lineNorthWest.push((coordX - i).toString() + (coordY - i).toString());
            }
            if (lineNorthWest.length === winLineLength) {
                playerXLines.push(lineNorthWest);
                console.log('nw: ', lineNorthWest)
            }
        }
        console.log(playerXLines);
    }


    function createPlayer0Lines(coordX, coordY) {
        let gameBoard = document.getElementById('game-board');
        let maxWidth = parseInt(gameBoard.dataset.colNum) - 1;
        let maxHeight = parseInt(gameBoard.dataset.rowNum) - 1;
        let winLineLength = parseInt(gameBoard.dataset.winSize);
        coordX = parseInt(coordX);
        coordY = parseInt(coordY);
        // create N
        let lineNorth = [];
        for (let i = 0; i < winLineLength; i++) {
            if ((coordY - i).toString() < 0) {
                break;
            } else {
                lineNorth.push(coordX.toString() + (coordY - i).toString());
            }
            if (lineNorth.length === winLineLength) {
                player0Lines.push(lineNorth);
                console.log('n: ', lineNorth);
            }
        }
        // create NE
        let lineNorthEast = [];
        for (let i = 0; i < winLineLength; i++) {
            if ((coordX + i).toString() > maxWidth || (coordY - i).toString() < 0) {
                break;
            } else {
                lineNorthEast.push((coordX + i).toString() + (coordY - i).toString());
            }
            if (lineNorthEast.length === winLineLength) {
                player0Lines.push(lineNorthEast);
                console.log('ne: ', lineNorthEast);
            }
        }
        // create E
        let lineEast = [];
        for (let i = 0; i < winLineLength; i++) {
            if ((coordX + i).toString() > maxWidth) {
                break;
            } else {
                lineEast.push((coordX + i).toString() + coordY.toString());
            }
            if (lineEast.length === winLineLength) {
                player0Lines.push(lineEast);
                console.log('e: ', lineEast);
            }
        }
        // create SE
        let lineSouthEast = [];
        for (let i = 0; i < winLineLength; i++) {
            if ((coordX + i).toString() > maxWidth || (coordY + i).toString() > maxHeight) {
                break;
            } else {
                lineSouthEast.push((coordX + i).toString() + (coordY + i).toString());
            }
            if (lineSouthEast.length === winLineLength) {
                player0Lines.push(lineSouthEast);
                console.log('se: ', lineSouthEast)
            }
        }
        // create S
        let lineSouth = [];
        for (let i = 0; i < winLineLength; i++) {
            if (coordY + i > maxHeight) {
                break;
            } else {
                lineSouth.push(coordX.toString() + (coordY + i).toString());
            }
            if (lineSouth.length === winLineLength) {
                player0Lines.push(lineSouth);
                console.log('s: ', lineSouth)
            }
        }
        // create SW
        let lineSouthWest = [];
        for (let i = 0; i < winLineLength; i++) {
            if ((coordX - i) < 0 || (coordY + i) > maxHeight) {
                break;
            } else {
                lineSouthWest.push((coordX - i).toString() + (coordY + i).toString());
            }
            if (lineSouthWest.length === winLineLength) {
                player0Lines.push(lineSouthWest);
                console.log('sw: ', lineSouthWest)
            }
        }
        // create W
        let lineWest = [];
        for (let i = 0; i < winLineLength; i++) {
            if ((coordX - i) < 0) {
                break;
            } else {
                lineWest.push((coordX - i).toString() + coordY.toString());
            }
            if (lineWest.length === winLineLength) {
                player0Lines.push(lineWest);
                console.log('w: ', lineWest);
            }
        }
        // create NW
        let lineNorthWest = [];
        for (let i = 0; i < winLineLength; i++) {
            if ((coordX - i) < 0 || (coordY - i) < 0) {
                break;
            } else {
                lineNorthWest.push((coordX - i).toString() + (coordY - i).toString());
            }
            if (lineNorthWest.length === winLineLength) {
                player0Lines.push(lineNorthWest);
                console.log('nw: ', lineNorthWest)
            }
        }
        console.log(player0Lines);
    }

    function checkPlayerXWin() {
        let gameBoard = document.getElementById('game-board');
        let winLineLength = parseInt(gameBoard.dataset.winSize);
        let possibleWin = [];
        for (winningLine of playerXLines) {
            possibleWin = [];
            for (box of playerXPlacements) {
                if (winningLine.indexOf(box) >= 0) {
                    possibleWin.push(box);
                    if (possibleWin.length === winLineLength) {
                        alert('Player X wins.');
                        return;
                    }
                }
            }
        }
    }


    function checkPlayer0Win() {
        let gameBoard = document.getElementById('game-board');
        let winLineLength = parseInt(gameBoard.dataset.winSize);
        let possibleWin = [];
        for (winningLine of player0Lines) {
            possibleWin = [];
            for (box of player0Placements) {
                if (winningLine.indexOf(box) >= 0) {
                    possibleWin.push(box);
                    if (possibleWin.length === winLineLength) {
                        alert('Player 0 wins.');
                        return;
                    }
                }
            }
        }
    }

} // ends main()
main();
