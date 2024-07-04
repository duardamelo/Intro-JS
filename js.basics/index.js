//meu primeiro codigo javascript
console.log('Hello World');

//Primitives, Value types
//uma forma melhor de declarar variável
let name = 'Mosh'; //string literal
console.log(name);

//Uma variável não pode ser uma palavra reservada
//Não pode começar com némeros
//Não pode conter espaço ou hífen

//let firstName = 'Eduarda', lastName = 'Melo';

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let age = 30; //number literal
let isApproved = true; //boolean literal
let firstName = undefined;
let selectedColor = null;

//js é uma linguagem dinâmica

//Reference types
let person = {
    name: 'Mosh',
    age: 30
};//object literal

//dot notation
person.name = 'John';

//bracket notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);

//vetores
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

//função
//performing a task
function greet(name, lastName){
    //body of the function
    console.log('hello ' + name + ' ' + lastName);
}

greet('Jonh', 'Smith');

//cleaner version
//Calculating a value
function square(number){
   return number*number;
}

console.log(square(2));