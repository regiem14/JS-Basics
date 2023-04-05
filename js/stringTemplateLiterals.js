// let firstName = 'regie';

// console.log(`Hi ${firstName}!`)

// let sentence = `This is really convenience.
// You probably will never want to do something quite like this.
// You might choose to put long passages of text into an external file and load it somehow.`;

// console.log(sentence);

// let sentence2 = `This is really convenienent.
//             You probably will never want to do something quite like this.
//         You might choose to put long passages of text into an
//     external file and load it somehow.`

// console.log(sentence2);

// function getReasonCount(){ return 1;}

// let interpolation = `Give me ${(getReasonCount()==1) ? `one good reason` : `a few reasons`} to try this`;
// console.log(interpolation)

function getReasonCount(count){
    if(count == 2){
        return 'one good reason';
    }else{
        return 'a few reasons';
    }
 }

let interpolation = `Give me ${getReasonCount(2)} to try this`;
console.log(interpolation)
