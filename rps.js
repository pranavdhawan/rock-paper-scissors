const computerPlay = () => {
    var x = ['Rock', 'Paper', 'Scissors'];
    const c = x[Math.floor(Math.random() * x.length)];
    return c;
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            console.log('You Lose! Paper beats Rock lol');
        }
        else if (computerSelection === 'Scissors') {
            console.log('You Win! Rock beats Scissors. fuck u.');
        }
        else if (computerSelection === 'Rock') {
            console.log('Draw!');
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Paper') {
            console.log('Draw!');
        }
        else if (computerSelection === 'Scissors') {
            console.log('You Lose! Scissors beat Paper lol');
        }
        else if (computerSelection === 'Rock') {
            console.log('You Win! Paper beats Rock. fuck u.');
        }
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            console.log('You Win! Scissors beat Paper. fuck u');
        }
        else if (computerSelection === 'Scissors') {
            console.log('Draw!');
        }
        else if (computerSelection === 'Rock') {
            console.log('You Lose! Rock beats Scissors lol');
        }
    }
    else {
        console.log('Wrong Input!');
    }
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



rl.question("type your weapon ", function (usr) {
    console.log(`User: ${usr}`);
    const comp = computerPlay();
    console.log(`Comp: ${comp}`);
    console.log(playRound(usr, comp));
    rl.close();
});
rl.question("type your weapon ", function (usr) {
    console.log(`User: ${usr}`);
    const comp = computerPlay();
    console.log(`Comp: ${comp}`);
    console.log(playRound(usr, comp));
    rl.close();
});

rl.question("type your weapon ", function (usr) {
    console.log(`User: ${usr}`);
    const comp = computerPlay();
    console.log(`Comp: ${comp}`);
    console.log(playRound(usr, comp));
    rl.close();
});

rl.question("type your weapon ", function (usr) {
    console.log(`User: ${usr}`);
    const comp = computerPlay();
    console.log(`Comp: ${comp}`);
    console.log(playRound(usr, comp));
    rl.close();
});

rl.question("type your weapon ", function (usr) {
    console.log(`User: ${usr}`);
    const comp = computerPlay();
    console.log(`Comp: ${comp}`);
    console.log(playRound(usr, comp));
    rl.close();
});
