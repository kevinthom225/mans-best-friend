
/*const name = document.getElementById("name");

const email = document.getElementById("email");

const form = document.getElementById("form");

function validateForm (name, email) {
    form.addEventListener("submit");
    if(name.value === '' || email.value === ''){
        alert('Both name and email required.');
    }
}

validateForm(name.value, email.value);

const emptySubmit = false;

function isFieldEmpty(){
    const nameField = document.querySelector('name');
    const emailField = document.querySelector('email');
    if(nameField.value === '' || emailField.value === ''){
        return true;
    }
}

emptySubmit = isFieldEmpty();

if(emptySubmit){
    alert('Both fields are required.')
}*/

let answer1 = prompt('What are your 3 favorite breeds of dogs? Type 1: ');
let answer2 = prompt('Type 2: ');
let answer3 = prompt('Type 3');

const dogList = [answer1, answer2, answer3];

const main = document.querySelector('main');
let html = '';

for (let i = 0; i < 3; i++){
    html += `<div>${dogList[i]}</div>`; 
}

main.innerHTML = html;


