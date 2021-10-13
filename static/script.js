let title = document.getElementById("title");
let container = document.getElementById("container");
let quizName = document.getElementById("quizName");
let choice = document.getElementById("choice");
let btnNaruto = document.getElementById("naruto");
let btnHaikyuu = document.getElementById("haikyuu");
let btnOnePiece = document.getElementById("onePiece");
let btnJK = document.getElementById("jujutsuKaisen");
let btn1 = document.getElementById("first");
let btn2 = document.getElementById("second");
let btn3 = document.getElementById("third");
let btn4 = document.getElementById("fourth");
let rows = document.getElementsByClassName("row");
let question = document.getElementById("question");
let questionBlock = document.getElementById("questionBlock");
let btnStart = document.getElementById("start");
let answerBlock = document.getElementById("answerBlock");
let btnRestart = document.getElementById("restart");


class Question{
  constructor(questionText, answer1, answer2, answer3, answer4, correct){
    this.questionText = questionText;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.correct = correct;
  }
  ifCorrect(answer){
    return (answer == this.correct);
  }
}


let Haikyuu = [];
let Naruto = [];
let JK = [];
let OnePiece = [];

Haikyuu.push(new Question("What is the name of main character?","Kageyama","Hinata","Tanaka","Nishinoya",2));
Haikyuu.push(new Question("Who is the setter of Inarizaki?","Osamu Mia","Suno Rintaru","Atsumu Mia","Aaron Oudjurou",3));

Naruto.push(new Question("What is Shisuyi's sharingan ability?","Tsukuyomi","Amaterasu","Kamui","Kotoamatsukami",4));

let score = 0;
let num = 0;
let questions = [];

function next(num) {
  if(num >= questions.length){
    showScore();
  }
  else{
    let x = questions[num];
    question.innerHTML = x.questionText;
    btn1.innerHTML = x.answer1;
    btn2.innerHTML = x.answer2;
    btn3.innerHTML = x.answer3;
    btn4.innerHTML = x.answer4;
  }
}

function showScore() {
  answerBlock.style.display = "none";
  question.innerHTML = "Your score:" + score.toString();
  btnRestart.style.display = "block";
  questionBlock.style.margin = "10px 0 80px";
  container.style.padding = "0 0 80px";
}

btnNaruto.addEventListener('click', function() {
  choice.style.display = "none";
  quizName.innerHTML = "Naruto Quiz";
  title.innerHTML = quizName.innerHTML;
  questionBlock.style.margin = "10px 0 80px";
  container.style.padding = "0 0 80px";
  btnStart.style.display = "block";
  answerBlock.style.display = "none";
  question.innerHTML = "Are you ready?";
  for(let x of Naruto){
    questions.push(x);
  }
})

btnHaikyuu.addEventListener('click', function() {
  console.log("Haikyuu")
  choice.style.display = "none";
  quizName.innerHTML = "Haikyuu Quiz";
  title.innerHTML = quizName.innerHTML;
  questionBlock.style.margin = "10px 0 80px";
  container.style.padding = "0 0 80px";
  btnStart.style.display = "block";
  answerBlock.style.display = "none";
  question.innerHTML = "Are you ready?";
  for(let x of Haikyuu){
    questions.push(x);
  }
})

btnOnePiece.addEventListener('click', function() {
  choice.style.display = "none";
  quizName.innerHTML = "One Piece Quiz";
  title.innerHTML = quizName.innerHTML;
  questionBlock.style.margin = "10px 0 80px";
  container.style.padding = "0 0 80px";
  btnStart.style.display = "block";
  answerBlock.style.display = "none";
  question.innerHTML = "Are you ready?";
  for(let x of OnePiece){
    questions.push(x);
  }
})

btnJK.addEventListener('click', function() {
  choice.style.display = "none";
  quizName.innerHTML = "Jujutsu Kaisen Quiz";
  title.innerHTML = quizName.innerHTML;
  questionBlock.style.margin = "10px 0 80px";
  container.style.padding = "0 0 80px";
  btnStart.style.display = "block";
  answerBlock.style.display = "none";
  question.innerHTML = "Are you ready?";
  for(let x of JK){
    questions.push(x);
  }
})

btn1.addEventListener('click', function() {
  let x = questions[num];
  if(x.ifCorrect(1)) {
    score++;
  }
  num++;
  next(num);
})

btn2.addEventListener('click', function() {
  let x = questions[num];
  if(x.ifCorrect(2)) {
    score++;
  }
  num++;
  next(num);
})

btn3.addEventListener('click', function() {
  let x = questions[num];
  if(x.ifCorrect(3)) {
    score++;
  }
  num++;
  next(num);
})

btn4.addEventListener('click', function() {
  let x = questions[num];
  if(x.ifCorrect(4)) {
    score++;
  }
  num++;
  next(num);
})

btnStart.addEventListener('click', function() {
  questionBlock.style.margin = "10px 0 30px";
  container.style.padding = "0 0 30px";
  btnStart.style.display = "none";
  answerBlock.style.display = "block";
  next(num);
})

btnRestart.addEventListener('click', function (){
  quizName.innerHTML = "Anime quizes";
  title.innerHTML = quizName.innerHTML;
  question.innerHTML = "Choose quiz";
  answerBlock.style.display = "none";
  choice.style.display = "block";
  btnRestart.style.display = "none";
  questionBlock.style.margin = "10px 0 30px";
  container.style.padding = "0 0 30px";
  questions = [];
  score = 0;
  num = 0;
})