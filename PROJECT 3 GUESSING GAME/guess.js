// let secret = 7;
// let answer = Number(prompt("Choose a number between 0 and 20"));

// if(answer===secret){
//     alert("Well done, correct guess.");
// }else{
//     alert("Sorry, try again.");
// }

// while(answer!==secret){
//     if(answer>=0&&answer<secret){
//         answer = Number(prompt("Incorrect, too low. Try again. Choose a number between 1 and 20"));
//     }if(answer>secret&&answer<=20){
//         answer = Number(prompt("Incorrect, too high. Try again. Choose a number between 1 and 20"));
//     }
// }

// alert("Well done, correct guess.");

let secret1=Math.floor(Math.random()*21);

alert("secret1: "+secret1)
let answer1 = Number(prompt("Choose a number between 0 and 20"));
while(answer1!==secret1){
    if(answer1>=0&&answer1<secret1){
        answer1 = Number(prompt("Incorrect, too low. Try again. Choose a number between 1 and 20"));
    }if(answer1>secret1&&answer1<=20){
        answer1 = Number(prompt("Incorrect, too high. Try again. Choose a number between 1 and 20"));
    }
}

alert("Well done, correct guess.");