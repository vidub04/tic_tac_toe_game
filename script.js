function player() {
    document.querySelector("#play").style.display = "none";

    document.querySelector(".container").style.display="flex";
}


let d1=document.querySelector("#d1")
let d2=document.querySelector("#d2")
let d3=document.querySelector("#d3")
let d4=document.querySelector("#d4")
let d5=document.querySelector("#d5")
let d6=document.querySelector("#d6")
let d7=document.querySelector("#d7")
let d8=document.querySelector("#d8")
let d9=document.querySelector("#d9")



let turn0=true;

let w=0;

let board=["E","E","E","E","E","E","E","E","E"];


let patterns=[
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6]
];

let cnt=0;

let divs=document.querySelectorAll(".box")



let draw= () => {
    let arr=board.filter((val) => val=="E");
    if(arr.length == 0){
        document.querySelector("#turn").innerText="Game is Drawn⭐";

        document.querySelector("#continue").style.display="flex";
        
        
    }
}



let check_condition= () =>{
    
    for(let pattern of patterns){
        let [a,b,c]=pattern;

        if(board[a] !="E" && board[a]==board[b] &&board[b]==board[c]){
            if(turn0==true){

                document.querySelector("#turn").innerText="Player 2 Wins 👑";

            }else{
                document.querySelector("#turn").innerText="Player 1 Wins 👑";
            }
            
            w=1;
            document.querySelector("#continue").style.display="flex";
        }
    }

    if(w==0){
        draw();
    }


}

let reset=() =>{
    board=["E","E","E","E","E","E","E","E","E"];

    

    for(let one_div of divs){
        one_div.innerText="";
    }

    turn0=true; //resetting turn
    document.querySelector("#turn").innerText="Player 1 Plays ⭕" ;
    w=0; //resetting winner
    document.querySelector("#continue").style.display="none";
    cnt=0;


}


let change_turn=()=>{

    if(turn0==true){

        document.querySelector("#turn").innerText="Player 1 Plays ⭕";

    }else{
        document.querySelector("#turn").innerText="Player 2 Plays ❌";
    }

    

}

divs.forEach((one_div, index) => {
    one_div.addEventListener("click", () => {
        if (board[index] !== "E") {
            alert("Box is already marked");
            return;
        }

        if (turn0) {
            board[index] = "O";
            one_div.innerText = "O";
            one_div.style.color = "red";
            turn0 = false;
        } else {
            board[index] = "X";
            one_div.innerText = "X";
            one_div.style.color = "green";
            turn0 = true;
        }

        change_turn();
        check_condition();
    });
});

