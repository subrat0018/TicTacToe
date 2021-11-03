let music= new Audio("bg.mp3");
let turn=new Audio("turn.mp3");
let gameover=new Audio("gameOver.mp3")
let player="X";
let changeTurn=()=>{
    if (player === "X") {
        return "0";
    }
    else
    return "X";
}
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxText=document.querySelector(".boxtext");
    boxText.addEventListener("click",()=>{

    })
})