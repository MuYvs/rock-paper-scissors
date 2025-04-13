function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

let player_score = 0;
let computer_score = 0;
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

// function CompareChoice (p_choice, c_choice) {
//     if (p_choice === 'rock' && c_choice === 'rock') {
//         alert(`Tie! Both You and the Computer Chose 'rock'.\nYour score: ${player_score} | Computer score: ${computer_score}`);
//     }
//     else if (p_choice === 'rock' && c_choice === 'paper') {
//         computer_score += 1;
//         alert(`You Lose! You Chose 'rock' and the Computer Chose 'paper'.\nYour score: ${player_score} | Computer score: ${computer_score}`);
//     }
//     else if (p_choice === 'rock' && c_choice === 'scissor') {
//         player_score += 1;
//         alert(`You Win! You Chose 'rock' and the Computer Chose 'scissor'.\nYour score: ${player_score} | Computer score: ${computer_score}`);
//     }

//     else if (p_choice === 'paper' && c_choice === 'rock') {
//         player_score += 1;
//         alert(`You Win! You Chose 'paper' and the Computer Chose 'rock'.\nYour score: ${player_score} | Computer score: ${computer_score}`);
//     }
//     else if (p_choice === 'paper' && c_choice === 'paper') {
//         alert(`Tie! Both You and the Computer Chose 'paper'.\nYour score: ${player_score} | Computer score: ${computer_score}`);
//     }
//     else if (p_choice === 'paper' && c_choice === 'scissor') {
//         computer_score += 1;
//         alert(`You Lose! You Chose 'paper' and the Computer Chose 'scissor'.\nYour score: ${player_score} | Computer score: ${computer_score}`);
//     }

//     else if (p_choice === 'scissor' && c_choice === 'rock') {
//         computer_score += 1;
//         alert(`You Lose! You Chose 'scissor' and the Computer Chose 'rock'.\nYour score: ${player_score} | Computer score: ${computer_score}`);
//     }
//     else if (p_choice === 'scissor' && c_choice === 'paper') {
//         player_score += 1;
//         alert(`You Win! You Chose 'scissor' and the Computer Chose 'paper'.\nYour score: ${player_score} | Computer score: ${computer_score}`);
//     }
//     else if (p_choice === 'scissor' && c_choice === 'scissor') {
//         alert(`Tie! Both You and the Computer Chose 'scissor'.\nYour score: ${player_score} | Computer score: ${computer_score}`);
//     }
// }

// while (player_score < 5 && computer_score < 5) {
//     CompareChoice(PlayerChoice(), CompChoice());
// }

// if (player_score >= 5) {
//     alert("You Won!");
// }
// else if (computer_score >= 5) {
//     alert("You Lost!");
// }