
const form = document.querySelector('.quiz-form');

form.addEventListener("submit", event =>{
    event.preventDefault();
    let result = document.querySelector('.result'); 

//     let myQuerry = document.querySelectorAll('.question');
//     let correctCount = 0;

//         if(form.q1.value === "A"){
//             myQuerry[0].classList.add('correct');
//             correctCount++;
//         }else{
//             myQuerry[0].classList.add('wrong');
//         }
//         if(form.q2.value === "B"){
//             myQuerry[1].classList.add('correct');
//             correctCount++;
//         }else{
//             myQuerry[1].classList.add('wrong');
//         }
//         if(form.q3.value === "C"){
//             myQuerry[2].classList.add('correct');
//             correctCount++;
//         }else{
//             myQuerry[2].classList.add('wrong');
//         }
//         if(form.q4.value === "D"){
//             myQuerry[3].classList.add('correct');
//             correctCount++;
//         }else{
//             myQuerry[3].classList.add('wrong');
//         }
//         if(form.q5.value === "A"){
//             myQuerry[4].classList.add('correct');
//             correctCount++;
//         }else{
//             myQuerry[4].classList.add('wrong');
//         }

// console.log(correctCount);

let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]
let corrcetAnswer = ["C", "A", "A", "A", "B"];
let score =0;
let myQuerry = document.querySelectorAll('.question');

userAnswers.forEach((answer, index)=> {
    if(answer === corrcetAnswer[index]){
      score++;
      myQuerry[index].classList.add('class', 'correct');
    }else{
        myQuerry[index].classList.add('class', 'wrong');
    }
})

result.classList.remove('hide');

scrollTo(0,0);
console.log(result);
let resultP = document.querySelector("body > main > section > div.result > p:nth-child(1)")
resultP.textContent = `You scored ${score}/5`;

 
})