const readline = require('readline');
const events = require("events");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const emitter = new events.EventEmitter();

const answers = [];
const firstQuestion = [
    "What is your name?\n",
];

const nextQuestion = answer =>{
    answers.push(answer);
    console.log(`Hello ${answers[0]}, how are you doing?\n`)
};

rl.question(firstQuestion, nextQuestion);

process.stdin.on("state", data => {
    console.log(`Tell me more about that, why are you ${data}?`);
    console.log("Just know that you can end our conversation any time. Just say 'lets talk later' and we can wrap up.");
    if(state == "lets talk later"){
        process.exit();
    };
});

//break up readline.question .. function should not lead to next question. should lead to return rl.write or emitter.emit

//write exit code
