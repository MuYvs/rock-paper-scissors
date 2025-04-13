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

let body = document.querySelector("body");
let start_container = document.querySelector(".start-container");
let play_button = document.querySelector("#start-button");

play_button.addEventListener('click', function() {
    body.removeChild(start_container);
})

play_button.addEventListener('click', function() {
    let game_container = document.createElement('div');
    game_container.classList.add('container', 'game-container');

    let best_of_header = document.createElement('h1');
    best_of_header.textContent = "Best of 5";
    game_container.appendChild(best_of_header);

    let score_round_counter_container = document.createElement('div');
    score_round_counter_container.classList.add('score-round-counter-container');

    let player_score_counter = document.createElement('p');
    player_score_counter.textContent = `Player Score: `;

    let rounds_counter = document.createElement('p');
    rounds_counter.textContent = `Round: `;

    let computer_score_counter = document.createElement('p');
    computer_score_counter.textContent = `Computer Score: `;

    score_round_counter_container.appendChild(player_score_counter);
    score_round_counter_container.appendChild(rounds_counter);
    score_round_counter_container.appendChild(computer_score_counter);
    game_container.appendChild(score_round_counter_container);

    let buttons_container = document.createElement('div');
    buttons_container.classList.add('buttons-container');
    
    let rock_button = document.createElement('button');
    rock_button.classList.add('option-button')
    rock_button.innerHTML = "&#9994";

    let paper_button = document.createElement('button');
    paper_button.classList.add('option-button')
    paper_button.innerHTML = "&#9995";

    let scissor_button = document.createElement('button');
    scissor_button.classList.add('option-button')
    scissor_button.innerHTML = "&#9996";

    buttons_container.appendChild(rock_button);
    buttons_container.appendChild(paper_button);
    buttons_container.appendChild(scissor_button);
    game_container.appendChild(buttons_container);
    
    body.appendChild(game_container);
})

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