let boxes = document.querySelectorAll(".box");

let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let msgCont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let tuenO = true;

let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () =>{
    tuenO = true;
    enableBoxes();
    msgCont.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        if(tuenO){
            box.innerText = 'O';
            tuenO = false;
        }
        else{
            box.innerText = 'X';
            tuenO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
let disableBoxes=() =>{
    for(box of boxes){
        box.disabled = true;
    }
};
let enableBoxes=() => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner)=> {
    msg.innerText = `Congratulations,Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
    }
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);