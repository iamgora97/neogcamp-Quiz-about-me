//install package readline-sync
var x=require('readline-sync');

//welcome Message
console.log("Hi! I am Gourob,I made this CLI app")
var name = x.question("What's your name? ");
console.log("Hello "+name.toUpperCase()+"!  Let's play a game about me");
console.log("-----------------------");

//declare variables
var y="Yay! you're right";
var n="Uh-oh! you're wrong";
var score = 0;


//creating function
function check(questionAsked,answerCorrect){
  var userAnswer=x.question(questionAsked);

  //checking answer
  if(answerCorrect.toUpperCase()==userAnswer.toUpperCase()){
    score += 1;
    console.log(y);
  }
  else{
    console.log(n);
    console.log("Correct answer is :"+answerCorrect);
  }

  //current score
  console.log("Current Score :"+score);
  console.log("-----------------------");
}

//create objects
//key:value
var q1={
  q:"Is Gourob a tea person or coffee person? ",
  a:"Coffee"
}
var q2={
  q:"Which social media platform does Gourob use the most? ",
  a:"Instagram"
}
var q3={
  q:"Does Gourob wear specs?(yes/no) ",
  a:"Yes"
}
var q4={
  q:"Which brand phone does Gourob use? ",
  a:"Apple"
}
var q5={
  q:"Where does Gourob live? ",
  a:"Bankura"
}


//creating array of objects
var qa=[q1,q2,q3,q4,q5];

//accessing array
for(var i=0;i<qa.length;i++){
  check(qa[i].q,qa[i].a)
}

//final score and thank you Message
console.log("Final Score : " + score +"/5");
if(score<5){
  console.log("Play again to get 5/5");
}
else{
console.log("Thank you for playing my game "+name.toUpperCase());
}
//end
