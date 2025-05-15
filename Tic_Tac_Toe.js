let count = 0; // Keeps track of moves
let turnO = true; // 'O' starts the game
let gameOver = false; // Prevents further moves after game ends

const checkWinner = () => {
    let winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let pattern of winPatterns) {
        let pos1 = document.querySelectorAll(".box")[pattern[0]].innerText;
        let pos2 = document.querySelectorAll(".box")[pattern[1]].innerText;
        let pos3 = document.querySelectorAll(".box")[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            document.getElementById("msg").innerText = `Winner: ${pos1}`;
            document.querySelector(".msg-container").classList.remove("hide");
            gameOver = true;
            return;
        }
    }

    // Check for Draw
    if (count === 9 && !gameOver) {
        document.getElementById("msg").innerText = "It's a Draw!";
        document.querySelector(".msg-container").classList.remove("hide");
    }
};

// Handling box clicks
document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "" && !gameOver) {
            box.innerText = turnO ? "O" : "X";
            turnO = !turnO;
            count++;
            checkWinner();
        }
    });
});

// Reset Game Function
const resetGame = () => {
    document.querySelectorAll(".box").forEach((box) => {
        box.innerText = "";
    });
    count = 0;
    turnO = true;
    gameOver = false;
    document.querySelector(".msg-container").classList.add("hide");
    document.getElementById("msg").innerText = "";
};

// Attach Reset Event Listeners
document.getElementById("reset-btn").addEventListener("click", resetGame);
document.getElementById("new-btn").addEventListener("click", resetGame);
