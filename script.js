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

let change=() => {
    console.log("box1 is clicked");
}

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
    d1.innerText="";
    d2.innerText="";
    d3.innerText="";
    d4.innerText="";
    d5.innerText="";
    d6.innerText="";
    d7.innerText="";
    d8.innerText="";
    d9.innerText="";

    turn0=true; //resetting turn
    document.querySelector("#turn").innerText="Player 1 Plays ⭕" ;
    w=0; //resetting winner
    document.querySelector("#continue").style.display="none";


}


let change_turn=()=>{

    if(turn0==true){

        document.querySelector("#turn").innerText="Player 1 Plays ⭕";

    }else{
        document.querySelector("#turn").innerText="Player 2 Plays ❌";
    }

    

}

d1.addEventListener("click",() =>{
    if(board[0] != "E"){
        alert("Box is marked already");
    }else{
        if(turn0==true){
            board[0]="O";
            d1.innerText="O";
            d1.style.color="red";
            turn0=false;
            change_turn();
        }else{
            board[0]="X";
            d1.innerText="X";
            d1.style.color="green";
            turn0=true;
            change_turn();
        }

        check_condition();

    }
});

d2.addEventListener("click",() =>{
    if(board[1] != "E"){
        alert("Box is marked already");
    }else{
        if(turn0==true){
            board[1]="O";
            d2.innerText="O";
            d2.style.color="red";
            turn0=false;
            change_turn();
        }else{
            board[1]="X";
            d2.innerText="X";
            d2.style.color="green";
            turn0=true;
            change_turn();
        }

        check_condition();
    }
});

d3.addEventListener("click",() =>{
    if(board[2] != "E"){
        alert("Box is marked already");
    }else{
        if(turn0==true){
            board[2]="O";
            d3.innerText="O";
            d3.style.color="red";
            turn0=false;
            change_turn();
        }else{
            board[2]="X";
            d3.innerText="X";
            d3.style.color="green";
            turn0=true;
            change_turn();
        }

        check_condition();
    }
});

d4.addEventListener("click",() =>{
    if(board[3] != "E"){
        alert("Box is marked already");
    }else{
        if(turn0==true){
            board[3]="O";
            d4.innerText="O";
            d4.style.color="red";
            turn0=false;
            change_turn();
        }else{
            board[3]="X";
            d4.innerText="X";
            d4.style.color="green";
            turn0=true;
            change_turn();
        }

        check_condition();
    }
});

d5.addEventListener("click",() =>{
    if(board[4] != "E"){
        alert("Box is marked already");
    }else{
        if(turn0==true){
            board[4]="O";
            d5.innerText="O";
            d5.style.color="red";
            turn0=false;
            change_turn();
        }else{
            board[4]="X";
            d5.innerText="X";
            d5.style.color="green";
            turn0=true;
            change_turn();
        }

        check_condition();
    }
});


d6.addEventListener("click",() =>{
    if(board[5] != "E"){
        alert("Box is marked already");
    }else{
        if(turn0==true){
            board[5]="O";
            d6.innerText="O";
            d6.style.color="red";
            turn0=false;
            change_turn();
        }else{
            board[5]="X";
            d6.innerText="X";
            d6.style.color="green";
            turn0=true;
            change_turn();
        }

        check_condition();
    }
});


d7.addEventListener("click",() =>{
    if(board[6] != "E"){
        alert("Box is marked already");
    }else{
        if(turn0==true){
            board[6]="O";
            d7.innerText="O";
            d7.style.color="red";
            turn0=false;
            change_turn();
        }else{
            board[6]="X";
            d7.innerText="X";
            d7.style.color="green";
            turn0=true;
            change_turn();
        }

        check_condition();
    }
});

d8.addEventListener("click",() =>{
    if(board[7] != "E"){
        alert("Box is marked already");
    }else{
        if(turn0==true){
            board[7]="O";
            d8.innerText="O";
            d8.style.color="red";
            turn0=false;
            change_turn();
        }else{
            board[7]="X";
            d8.innerText="X";
            d8.style.color="green";
            turn0=true;
            change_turn();
        }

        check_condition();
    }
});


d9.addEventListener("click",() =>{
    if(board[8] != "E"){
        alert("Box is marked already");
    }else{
        if(turn0==true){
            board[8]="O";
            d9.innerText="O";
            d9.style.color="red";
            turn0=false;
            change_turn();
        }else{
            board[8]="X";
            d9.innerText="X";
            d9.style.color="green";
            turn0=true;
            change_turn();
        }

        check_condition();
    }
});


