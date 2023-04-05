// let x = 1;

// while(x < 10){
//     console.log(x++);
//     if(x == 7) break;
// }

// let a = 'first example of scope outside of a codeblock';

// function scopeTest(){
//     console.log(a);
//     let b = 'second example of scope inside of a code block'
// }

// scopeTest();
// console.log(b);

// a = 'first example of scope outside of a codeblock';

// function scopeTest(){
//     console.log(a);
//     if(a != ''){
//         console.log(a);
//     }
// }

// scopeTest();


// a = 'first example of scope outside of a codeblock';

// function scopeTest(){
//     console.log(a);
//     var c;
//     if(a != ''){
//         console.log(a);
//         var c = 'third example of scope inside of a function scope and a if statement code block';
//     }
//     console.log(c);
// }

// scopeTest();

// a = 'first example of scope outside of a codeblock';

// function scopeTest(){
//     console.log(a);
    
//     if(a != ''){
//         console.log(a);
//         var c = 'third example of scope inside of a function scope and a if statement code block';
//     }
//     console.log(c);
// }

// scopeTest();

// a = 'first example of scope outside of a codeblock';

// function scopeTest(){
//     console.log(a);
//     a = 'changed the vlaue of the variable a outside of the function scope'
//     let b = 'second variable inside of the function scope.';
//     if(a != ''){
//         console.log(a);
//         console.log('inside if: ' + b)
//         var c = 'third example of scope inside of a function scope and a if statement code block';
//     }
// }

// scopeTest();
// console.log(a);

a = 'first example of scope outside of a codeblock';

function scopeTest(){
    console.log(a);
    a = 'changed the vlaue of the variable a outside of the function scope'
    let b = 'second variable inside of the function scope.';
    if(a != ''){
        console.log(a);
        console.log('inside if: ' + b)
        var c = 'third example of scope inside of a function scope and a if statement code block';
    }
}

scopeTest();
console.log(a);
