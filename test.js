const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const answers = []



rl.question("how is it going?"/n, answer => {
    answers.push(answer);
    console.log(answers[0]);
});


//console.log(`you said ${answer}`);


