function sayHello(name){
    return function (){
        console.log('Howdy ' + name + '!')
    }
}

let regie = sayHello('regie');


let syndra = sayHello('syndra');
let teemo = sayHello('teemo');
let gray = sayHello('gray');

regie();
syndra();
teemo();
gray();
