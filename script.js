function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function CompChoice(){
    let choice_num = random(3);
    let choice;
    if (choice_num == 0) {
        choice = 'rock';
    }
    else if (choice_num == 1) {
        choice = 'paper';
    }
    else {
        choice = 'scissor';
    }
    return choice;
}

function PlayerChoice() {
    let player_choice = prompt("Choose Rock | Paper | Scissor").toLowerCase();
    if (player_choice === 'rock' || player_choice === 'paper' || player_choice === 'scissor') {
        return player_choice;
    }
    else {
        PlayerChoice()
    }
}

console.log(PlayerChoice())