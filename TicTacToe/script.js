let music= new Audio("bg.mp3");
let turn=new Audio("turn.mp3");
let gameover=new Audio("gameOver.mp3")
let player="X";
let image=document.getElementById("image");
image.style.display = 'none';
let reset=document.getElementById("info");
// let p1=prompt("Enter the name of the player 1: ");
// let p2=prompt("Enter the name of the player 2: ");
// let winner=p1;
function changeTurn(){
    // console.log("any");
    // if(winner === p1)
    //     winner = p2;
    // else
    //     winner = p1;
    if (player === "X") {
        reset.innerText="0";
        return "0";
    }
    else
    { 
        reset.innerText="X";
        return "X";
    }
}
let boxes=document.getElementsByClassName("box");
const arr=Array.from(boxes);
function over()
{
    // let i=0;
    // if (arr[i].innerHTML === arr[i+3].innerHTML && arr[i].innerHTML === arr[i+6].innerHTML)
    // console.log("true");
    // else console.log("false");
    // console.log("Called");
    for (let i = 0; i < 3; i++) {
        if (arr[i].innerHTML === arr[i+3].innerHTML && arr[i].innerHTML === arr[i+6].innerHTML) {
            console.log("1");
            if(arr[i].innerHTML != `<span class="boxtext"></span>`)
            return true;
        }
        
    }
    for (let i = 0; i < 8; i+=3) {
        if (arr[i].innerHTML === arr[i+1].innerHTML && arr[i].innerHTML === arr[i+2].innerHTML) {
            console.log("2");
            if(arr[i].innerHTML != `<span class="boxtext"></span>`)
            return true;   
        }
    }
    if (arr[0].innerHTML === arr[4].innerHTML && arr[0].innerHTML === arr[8].innerHTML) {
        console.log("3");
        if(arr[0].innerHTML != `<span class="boxtext"></span>`)
        return true;
    }
    if (arr[2].innerHTML === arr[4].innerHTML && arr[2].innerHTML === arr[6].innerHTML) {
        console.log("4");
        if(arr[2].innerHTML != `<span class="boxtext"></span>`)
        return true;
    }
    return false;
} 
function gameReset()
{
    console.log("rou");
        for (let i = 0; i < arr.length; i++) {
            arr[i].innerHTML=`<span class="boxtext"></span>`;
            console.log("inside");
        }
        image.style.display='none';
}
console.log(arr);
let flag = false;
let v=document.getElementById("reset");
v.addEventListener("click",()=>{
    gameReset();
})
for(let i=0;i<arr.length;i++)
{
    // v.addEventListener("click",()=>{
    //     gameReset();
    // })
    arr[i].addEventListener('click',()=>{
        music.play();
        if(arr[i].innerHTML === `<span class="boxtext"></span>`)
        arr[i].innerHTML=`<span>${player}</span>`;
        turn.play();
        if(over())
        {
            gameover.play();
            setInterval(() => {
                let body=document.getElementById("bod");
                             
                body.style.backgroundColor=`rgb(30,90,117)`;
                console.log("Hi");
            }, 1000);
            
            // console.log("Debug")
            // alert(`${winner} is winner`);
            // flag = false;
            // location.reload(true);
            if(player === 'X')
            image.innerHTML=`<img src="X_turn.gif" alt="">`;
            else
            image.innerHTML=`<img src="O_turn.gif" alt="">`;
            image.style.display='inline';
            setTimeout(() => {
                gameReset();
            }, 5000);
            // gameReset();
            return;
        }
        player=changeTurn();
    })      
}

