// boxes are grid items on which player clicks to play his move
const boxes = document.querySelectorAll('.box');

// A div that has initial display: none, but once the game ends it shows up
const gameMsg = document.querySelector('.game-msg');

// A button to start a new game 
const newGameBtn = document.querySelector('.new-game');

// Paragraph that shows verdict of the game, it is inside gameMsg div
const gameMsgPara = document.querySelector('.game-msg p');

// A div that contains all boxes
const gridContainer = document.querySelector('.grid-container');

let move = 'X';

const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

function checkWin(m){
    for(let i = 0; i < winConditions.length; i++){
        let flag = 1;
        for(let j = 0; j < winConditions[i].length; j++){
            if(boxes[winConditions[i][j]].innerText !== m){
                flag = 0;
                break;
            }
        }
        if(flag === 1){
            return true;
        }
    }
    return false;
}

function checkDraw(){
    let cnt = 0;
    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].innerText === 'X' || boxes[i].innerText === 'O'){
            cnt++;
        }
    }
    console.log(cnt);
    return cnt === 9;
}

boxes.forEach(box => {
    box.addEventListener('click', (e) => {
        e.target.innerText = move;
        e.target.classList.add('bg-played');
        if(checkWin(move)){
            gameMsgPara.innerText = `${move} won the game!!!`;
            gameMsg.classList.add('d-block');
            gridContainer.classList.add('d-none');
        }
        else if(checkDraw()){
            gameMsgPara.innerText = 'Game Drawn!!!';
            gameMsg.classList.add('d-block');
            gridContainer.classList.add('d-none');
        }
        else{
            if(move === 'X'){
                move = 'O';
            }
            else{
                move = 'X';
            }
        }
    }, { once: true });
});

newGameBtn.addEventListener('click', () => {
    location.reload();
});