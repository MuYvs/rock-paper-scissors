function random(number) {
    return Math.floor(Math.random() * (number));
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
    player_score_counter.textContent = `Player Score: ${player_score}`;

    let rounds_counter = document.createElement('p');
    rounds_counter.textContent = `Round: `;

    let computer_score_counter = document.createElement('p');
    computer_score_counter.textContent = `Computer Score: ${computer_score}`;

    score_round_counter_container.appendChild(player_score_counter);
    score_round_counter_container.appendChild(rounds_counter);
    score_round_counter_container.appendChild(computer_score_counter);
    game_container.appendChild(score_round_counter_container);

    let buttons_container = document.createElement('div');
    buttons_container.classList.add('buttons-container');
    
    let rock_button = document.createElement('button');
    rock_button.setAttribute('id', 'rock-button');
    rock_button.classList.add('option-button');
    rock_button.innerHTML = "&#9994";

    let paper_button = document.createElement('button');
    paper_button.setAttribute('id', 'paper-button');
    paper_button.classList.add('option-button');
    paper_button.innerHTML = "&#9995";

    let scissor_button = document.createElement('button');
    scissor_button.setAttribute('id', 'scissor-button');
    scissor_button.classList.add('option-button');
    scissor_button.innerHTML = "&#9996";

    buttons_container.appendChild(rock_button);
    buttons_container.appendChild(paper_button);
    buttons_container.appendChild(scissor_button);
    game_container.appendChild(buttons_container);

    let game_status_container = document.createElement('div');
    game_status_container.classList.add('game-status-container');
    let win_loss = document.createElement('h2');
    win_loss.classList.add('win-loss-header');
    win_loss.textContent = '\r\n'
    let game_status_text = document.createElement('p');
    game_status_text.classList.add('game-status-text');
    game_status_text.textContent = "\r\n\r\n";

    game_status_container.appendChild(win_loss);
    game_status_container.appendChild(game_status_text);

    buttons_container.addEventListener('click', function(e) {
        target_button = e.target;

        let player_choice = '';
        let computer_choice = '';
        let game_result = '';

        switch(target_button.id) {
            case 'rock-button':
                player_choice = 'rock';
                computer_choice = CompChoice();
                game_result = CompareChoice(player_choice, computer_choice);
                break;

            case 'paper-button':
                player_choice = 'paper';
                computer_choice = CompChoice();
                game_result = CompareChoice(player_choice, computer_choice);
                break;

            case 'scissor-button':
                player_choice = 'scissor';
                computer_choice = CompChoice();
                game_result = CompareChoice(player_choice, computer_choice);
                break;
        }

        switch(game_result) {
            case 'player win':
                player_score += 1;
                player_score_counter.textContent = `Player Score: ${player_score}`;
                win_loss.textContent = "You won the round";
                game_status_text.textContent = `You chose: ${player_choice}\r\nOpponent chose: ${computer_choice}`
                break;

            case 'player loss':
                computer_score += 1;
                computer_score_counter.textContent = `Computer Score: ${computer_score}`;
                win_loss.textContent = "You lost the round";
                game_status_text.textContent = `You chose: ${player_choice}\r\nOpponent chose: ${computer_choice}`
                break;

            case 'tie':
                win_loss.textContent = "It's a tie";
                game_status_text.textContent = `You chose: ${player_choice}\r\nOpponent chose: ${computer_choice}`
                break;
        }
    })
    game_container.appendChild(game_status_container);
    body.appendChild(game_container);
})

function CompareChoice (p_choice, c_choice) {
    if (p_choice === 'rock' && c_choice === 'rock') {
        return 'tie';
    }
    else if (p_choice === 'rock' && c_choice === 'paper') {
        return 'player loss';
    }
    else if (p_choice === 'rock' && c_choice === 'scissor') {
        return "player win";
    }

    else if (p_choice === 'paper' && c_choice === 'rock') {
        return "player win";;
    }
    else if (p_choice === 'paper' && c_choice === 'paper') {
        return 'tie';
    }
    else if (p_choice === 'paper' && c_choice === 'scissor') {
        return 'player loss';
    }

    else if (p_choice === 'scissor' && c_choice === 'rock') {
        return 'player loss';
    }
    else if (p_choice === 'scissor' && c_choice === 'paper') {
        return "player win";;
    }
    else if (p_choice === 'scissor' && c_choice === 'scissor') {
        return 'tie';
    }
}

// while (player_score < 5 && computer_score < 5) {
//     CompareChoice(PlayerChoice(), CompChoice());
// }

// if (player_score >= 5) {
//     alert("You Won!");
// }
// else if (computer_score >= 5) {
//     alert("You Lost!");
// }