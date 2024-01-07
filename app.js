
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    enableBoxes();
    msgContainer.classList.add("hide");
    turn0 = true;
};

const newGame = () => {
    resetGame();
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            box.innerText = "0";
        } else {
            box.innerText = "X";
        }
        turn0 = !turn0;
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    boxes.forEach((box) => (box.disabled = true));
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [pos1, pos2, pos3] = pattern;
        let pos1Val = boxes[pos1].innerText;
        let pos2Val = boxes[pos2].innerText;
        let pos3Val = boxes[pos3].innerText;

        if (pos1Val && pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("winner", pos1Val);
            showWinner(pos1Val);
        }
    }
};

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame);



