// console.smile();

// function smile(){

// }

// function sayHello(){
//     var name;
//     console.log('----------------');
//     console.log('Hello');
//     console.log('------------');
//     console.log('-          -');
//     console.log('-          -');
//     console.log('-             -');
//     console.log('-              -');
//     console.log('-             -');
//     console.log('-  -');
// }

// // sayHello();

// let a = sayHello;

// a();
// a();
// a();

function sayHello2(name){
    console.log('----------------');
    // prompt("Enter your name here")
    console.log('Hello ' + name + '!');

}

sayHello2('Regie')
sayHello2('Syndra')
sayHello2('Teemo')

function calculateTax(amount){
    let result = amount * 0.825;
    return result;
}

let tax = calculateTax(500);

console.log(tax);