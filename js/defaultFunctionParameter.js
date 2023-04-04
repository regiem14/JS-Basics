/*function greetings(message='Hi!'){
    console.log(message);
}

greetings();

greetings('Hello!');

function add(x, y){
    // return x + y;
    return console.log(x + y);

}

// console.log(add(5,5));

add(5,5);

function say(message){
    message = typeof message !== 'undefined' ? message : 'H1! This is a false value ternary';
    console.log(message);
}

say();
*/

function multiply(a, b){
    b = typeof b !== 'undefined' ? b : 1;
    return a * b;
}

console.log(multiply(5,5))
console.log(multiply(5))
