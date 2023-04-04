// function nameofFunction (){

// }

// setTimeout(() => {

// }, timeout);

setTimeout(function (){
    console.log('Lets wait for 2 seconds')
}, 2000);

// // setTimeout();

// setTimeout(function(){

// }, 2000);

setTimeout(function(){console.log('Lets wait for 3 seconds'), 3000})
setTimeout(function(){
    console.log('Lets wait for 5 seconds')
}, 5000)

let counter = 0;

function timeout(){
    setTimeout(function(){
        console.log('Hi this is a function expression inside of a setTimeout method inside of a function declaration')
    }, 6000)
}

timeout();

function countMessage(){
    setTimeout(function(){
        console.log('Regie is Here lets count' + counter++)
        countMessage();
    }, 8000);
}

countMessage();

(function(){
    console.log('Regie have IIFE');
})();

(function(){
    console.log('Regie have 2nd IIFE');
})();