const rs =require('readline-sync');
const chalk = require('chalk');

//staring criteria
console.log(chalk.blue.bold("\nWelcome to Stanger Things Series Game!!!"));
var playerName = (chalk.green.bold(rs.question("Hello What is Your Good Name :- ")));
console.log(chalk.yellow(`${playerName} , Welcome to The Game \n`));

//game criteria
var score = 0;
function gamePlay(questions , A , B , C , D, correctAnswer){
    console.log(chalk.cyanBright(questions));
    console.log("A :"+A);
    console.log("B :"+B);
    console.log("C :"+C);
    console.log("D :"+D);
    var answer  = rs.question(chalk.magenta("Answer in Option : -"));
    if(answer.toUpperCase() == correctAnswer){
        console.log(chalk.green('\tCorrect Answer'));    
        score = score+5;
    }
    else{
        console.log(chalk.red('\tWrong Answer'));    
        if(correctAnswer === "A")
        {
            correctAnswer=A;
        }else if(correctAnswer === "B")
        {
            correctAnswer=B;
        }else if(correctAnswer === "C")
        {
            correctAnswer=C;
        }else if(correctAnswer === "D")
        {
            correctAnswer=D;
        }
        console.log(chalk.greenBright("Correct Answer is: "+correctAnswer));
        score = score-2;
    }
        console.log(chalk.yellowBright('Your score is  :' + score));    
        console.log(chalk.gray('\n--------------------------------------------------------------\n'));    
} 
//creating qus answer 
var one = {
    qus:"Whose pink dress did Eleven wear in the first season?",
    A:"Karen (Mike's Mother)",
    B:"Nancy (Mike's Sister)",
    C:"Erica (Lucas's Sister)",
    D:"Joyce (Will's Mother)",
    ans:"B"
};
var two = {
    qus:"What Toto song is playing when Nancy and Steve are studying in her room in season 1 chapter 1 of Stranger Things?",
    A:"Africa",
    B:"Miss You More",
    C:"Shape Of You",
    D:"I Don't Wanna Live Forever",
    ans:"A"
};
var three = {
    qus:"In Stranger Things season 3 where did Billy work ?",
    A:"Hawkins Police Station",
    B:"Hawkins Lab",
    C:"Hawkins mall",
    D:"Hawkins Community Pool",
    ans:"D"
};
var four = {
    qus:"What movie theme song does Dustin sing to Suzie at the end of season 3 in Stranger Things?",
    A:"The Never-ending Story",
    B:"The Upside Down",
    C:"Rock You Like a Hurricane",
    D:"Chromatic Mechanics 2",
    ans:"A"
};
var five = {
    qus:"What is the name of Will's older brother in the show Stranger Things?",
    A:"Billy",
    B:"Dustin",
    C:"Jonathan",
    D:"Steve",
    ans:"C"
};
//calling function
qusArray = [one,two,three,four,five];
for(let i =0 ; i<qusArray.length;i++){
    gamePlay(qusArray[i].qus,qusArray[i].A,qusArray[i].B,qusArray[i].C,qusArray[i].D,qusArray[i].ans);
}
console.log(chalk.yellow('\n=====  Your Final score is  : ' + score + "=====\n"));