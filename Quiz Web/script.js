const Ques = [
   {
        question: "Q1: What is the largest planet in our solar system?",
        A: "Earth",
        B: "Mars",
        C: "Jupiter",
        D: "Saturn",
        ans: "ans1"
   }, {
        question: 'Q2: Who painted the famous artwork "The Mona Lisa"?',
        A: "Vincent van Gogh",
        B: "Leonardo da Vinci",
        C: "Michelangelo",
        D: "Pablo Picasso",
        ans: "ans2"
        }, {
        question: "Q3: Which of the following is a primary color?",
        A: "Purple",
        B: "Green",
        C: "Blue",
        D: "Orange",
        ans: "ans3"
        },{
        question: "Q4: What is the name of the process by which plants make their own food?",
        A: "Photosynthesis",
        B: "Respiration",
        C: "Digestion",
        D: "Fermentation",
        ans: "ans1"
        }, {
        question: "Q5: Who invented the telephone?",
        A: "Thomas Edison",
        B: "Alexander Graham Bell",
        C: "Nikola Tesla",
        D: "Samuel Morse",
        ans: "ans2"
        }, {
        question: "Q6: Which planet is known as the 'Red Planet'?",
        A: "Earth",
        B: "Venus",
        C: "Mars",
        D: "Jupiter",
        ans: "ans3"
        }, {
        question: "Q7: What is the largest mammal on Earth?",
        A: "Elephant",
        B: "Giraffe",
        C: "Whale",
        D: "Hippopotamus",
        ans: "ans3"
        }, {
        question: "Q8: Who is the author of the 'Harry Potter' book series?",
        A: "J.K. Rowling",
        B: "Stephen King",
        C: "Dan Brown",
        D: "Suzanne Collins",
        ans: "ans1"
        }, {
        question: "Q9: What is the capital of Australia?",
        A: "Sydney",
        B: "Perth",
        C: "Melbourne",
        D: "Canberra",
        ans: "ans4"
        }, {
        question: "Q10: Who is the current President of the United States?",
        A: "Barack Obama",
        B: "Joe Biden",
        C: "Donald Trump",
        D: "George W. Bush",
        ans: "ans2"
        }
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1"); 
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit"); 

const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#show-score");

let questionCount = 0; 
let score = 0;

const loadQuestion = () => {

    const questionList = Ques[questionCount];
    question.innerHTML= questionList.question;
    option1.innerHTML= questionList.A; 
    option2.innerHTML= questionList.B;
    option3.innerHTML= questionList.C;
    option4.innerHTML= questionList.D;

}

loadQuestion(); 

const getCheckAnswer = () => {
    let answer;
    answers.forEach((crrAnsEl) => {
        if(crrAnsEl.checked){
            answer = crrAnsEl.id;
        }    
    });
    return answer;   
};

const deselecteAll = () => {
    answers.forEach((crrAnsEl) => crrAnsEl.checked = false);
}

submit.addEventListener("click", () =>{
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);

    if(checkAnswer === Ques[questionCount].ans){
        score++;
    }

    questionCount++; 

    deselecteAll();

    if(questionCount < Ques.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> Your score is ${score}/${Ques.length} ✌ </h3>
        <button id="submit" onclick="location.reload()"> Play Again </button>
        `;
        showScore.classList.remove("scoreArea");
    }
})