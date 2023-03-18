let questions = [
{
id: 1,
question: "Consider n two colors of hardboard brown(b) and white(w). They arranging the hardboard in random manner. For example 1.b->w->w   2.w->b ->w .But the brown hardboard must be in 2nd position from rhs. In above two examples the 2nd string is accepted by the nfa for this condition. Which among the following is false according to the above description.",
answer:"T(B,b)->{A}",
options: [
"T(A,b)-> {A,B}",
"T(A,w)->{A}",
"T(B,b)->{A}",
"T(B,b)->{C}"
]
},
{
id: 2,
question:"Y = YY/()/(Y)/[]/[Y] . Is the sequence accepted by this Grammer ([ [ [ ()() [ ][ ] ] ]([ ]) ])?",
answer: "Yes it is accepted by using this grammer",
options: [
"Yes it is accepted by using this grammer",
"No it is mot accepted by using this grammer",
"The given productions are wrong to derive the sequence",
"None of these"

]
},
{
id: 3,
question: "Consider the following statements regarding the Moore and Mealy models: A) In Moore machine Outputs are a function of current state.Outputs change synchronously with state changes B) In Mealy machine Outputs depend on state and on inputs.Input changes can cause immediate output changes",
answer: "Both a and b is true",
options: [
"Only a is true",
"Only b is true",
"Both a and b is true",
"Both a and b is false"
]
},
{
id: 4,
question: "Let Language L={w  (a + b)*|w has even number of bs}, i.e. L is the set of all bit strings with even number of bs. Which one of the regular expression below represents L?",
answer: "a*(ba*ba*)*",
options: [
"(a*ba*b)*",
"a*(ba*ba*)*",
"a*(ba*b*)a*",
"a*b(ba*b)ba*"
]
},
{
id: 5,
question: "Which one of the following languages over the alphabet {m,n} is described by the regular expression: (m+n)*m(m+n)*m(m+n)*(mn)*?",
answer: "The set of all strings containing at least two m.",
options: [
"The set of all strings containing the substring mm.",
"The set of all strings containing at most two m.",
"The set of all strings containing at least two m.",
"The set of all strings that begin and end with either m or n."
]
},
{
id: 6,
question: "Sentence->Sentence Sentence/noun/verb is ambiguous.This indicates that at least some of the strings in its language have more thn the leftmost derivation However,its possible that certain language strings have just one source.1)nounnounnounnoun(has x leftmost derivation) 2)nounnounverb(has y leftmost derivation).Then what is the value of x+y?",
answer: "6",
options: [
"5",
"7",
"8",
"6"
]
},
{
id: 7,
question: "Application of FA and RE as follow; 1)FA can be used in UNIX,LINUX. 2)RE can be used in Model-checking",
answer: "Both 1 and 2 is wrong",
options: [
"Both 1 and 2 is right",
"Both 1 and 2 is wrong",
"Both 1 and 2 are the application of RE",
"Both 1 and 2 are the application of FA"
]
},
{
id: 8,
question: "Consider a Context free grammar: T->bT/C, C->null. what are productions come after removal of null production ",
answer: "we cannot remove null production",
options: [
"T->bT/c",
"T->bT",
"T->bT/c/null",
"we cannot remove null production"
]
},
{
id: 9,
question: "suresh is saving 5^primenumber of 5 rupee coins everyday. If he saving 5^2 coins on monday, 5^3 coins on Tuesday,5^5 coin on Wednesday and so on.Is this above description is in CFL?",
answer: "No",
options: [
"yes",
"We cannot derive this scenerio",
"None of these",
"No"
]
},
{
id: 10,
question: "T(a,0)->(a,0,R), T(a,B)->(b,0,R), T(b,B)->(c,0,R), T(c,B)->(c,B,-) Here a b c are the states, B is blank space,R represents Right. This Transition table Represents the turing machine for?",
answer: "x+2 function",
options: [
"x+2 function",
"x+1 function",
"x+3 function",
"None of above"

]
},
];

let question_count = 0;
let points = 0;


window.onload = function(){
show(question_count);
};

function show(count){
let question = document.getElementById("questions");
let[first, second, third, fourth] = questions[count].options;

question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
<ul class="option_group">
<li class="option">${first}</li>
<li class="option">${second}</li>
<li class="option">${third}</li>
<li class="option">${fourth}</li>
</ul>`;
toggleActive();
}

function toggleActive(){
let option = document.querySelectorAll("li.option");
for(let i=0; i < option.length; i++){
option[i].onclick = function(){
for(let i=0; i < option.length; i++){
if(option[i].classList.contains("active")){
option[i].classList.remove("active");
}
}
option[i].classList.add("active");
}
}
}

function next(){

if(question_count == questions.length -1){
location.href = "final.html";
}
console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
points += 10;
sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
} 