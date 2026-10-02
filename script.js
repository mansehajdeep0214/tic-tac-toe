let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let new_btn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector(".msg-display");

let turnO = true;

const resetbtn = ()=>{
    turnO = true ;
    enableboxes();
     
    msgContainer.classList.add("hide");
}

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was Clicked");
    if (turnO == true) {
      box.innerHTML = "X";
      turnO = false;
      box.style.color = "white";
      box.style.backgroundColor = "var(--Xcolor)";
    } else {
      box.innerHTML = "O";
      turnO = true;
      box.style.color = "white";
      box.style.backgroundColor = "var(--Ycolor)";
    }
    box.disabled = true;
    checkWinner();
  });
});

let disableboxes =  () => {
    for(let box of boxes) {box.disabled = true}
}

let enableboxes =  () => {
    for(let box of boxes) {box.disabled = false;
        box.innerHTML = "";
        box.style.backgroundColor = "white";
    };
    
}

const showWinner = (winner) => {
  msg.innerText = `Congratulation , Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledboxes();
};



const checkWinner = (params) => {
  for (let pattern of winPattern) {
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText,
    // );
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    // console.log(pattern[0], pattern[1], pattern[2]);

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        console.log("Winner is ", pos1val);
        showWinner(pos1val);
      }
    }
  }
};

reset_btn.addEventListener("click",resetbtn);
new_btn_btn.addEventListener("click",resetbtn);