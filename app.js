let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".scoreboard");
const result_div=document.querySelector(".result>p");
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissor_div=document.getElementById('s');

function getCompChoice(){
    const choices=['r','p','s'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML=userScore;
    result_div.innerHTML=convertToWord(user)+'(user) beats '+convertToWord(computer)+'(computer). You Win, Computer Lose!';
}
function lose(computer, user){
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=convertToWord(computer)+'(computer) beats '+convertToWord(user)+'(user). You Lose, Computer Win!';
}
function draw(user,computer){
    result_div.innerHTML=convertToWord(user)+'(user) is the same with' + convertToWord(computer)+'(computer). This round is Draw!'
}

function convertToWord(letter){
    if(letter=='r') return 'Rock';
    if(letter=='p') return 'Paper';
    if(letter=='s') return 'Scissor';
}



function main(){
rock_div.addEventListener('click',function(){game('r')});
paper_div.addEventListener('click', function(){game('p')});
scissor_div.addEventListener('click',function(){game('s')});}

function game(userChoice){
    const computerChoice=getCompChoice();
    switch(userChoice+computerChoice){
        case 'rs':
        case 'pr':
        case  'sp':
        win(userChoice,computerChoice);
        break;
        case 'rp':
        case 'ps':
        case 'sr':
        lose(computerChoice,userChoice);
        break;
        case 'rr':
        case 'pp':
        case 'ss':
        draw(userChoice,computerChoice);
        break;
        

        
    }}
main();


