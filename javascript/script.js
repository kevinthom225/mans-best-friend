
/*Create array of prompt answers*/

let answer1 = prompt('What are your 3 favorite breeds of dogs? Type 1: ');
let answer2 = prompt('Type 2: ');
let answer3 = prompt('Type 3');

const dogList = [answer1, answer2, answer3];

/*Add div elements with the array answers*/ 

const main = document.querySelector('main');
let html = '';

for (let i = 0; i < 3; i++){
    html += `<div>${dogList[i]}</div>`; 
}

/*Display the array on the website*/

main.innerHTML = html;


