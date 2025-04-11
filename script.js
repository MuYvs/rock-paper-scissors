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