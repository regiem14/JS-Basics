/*let promise = new Promise((resolve, reject)=>{
    let a = 1 + 1;
    // let a = 1 + 2;

    if (a == 2){
        resolve("This is a Javascript\'s SUCCESSFUL PROMISE!!!");
    }
    else{
        reject("This is a FAILED PROMISE!!!")
    }
}); */

// console.log(promise);


/*promise.then((message) =>{
    console.log("This is inside of the .then method " + "'" + message + " '");
}).catch((message)=>{
    console.log("This is inside of the .catch method " + "'" + message + " '");
});*/


// const userStopsWatching = false;
// const userCurrentlyWatching = false;

// const userStopsWatching = true;
// const userCurrentlyWatching = false;

const userStopsWatching = false;
const userCurrentlyWatching = true;

function callBack1Tutorial(callB, errorCallB){
    if(userStopsWatching){
        errorCallB({
            name: 'The user has stopped watching',
            message: 'Bye, see you soon again!!'
        });
    }else if(userCurrentlyWatching){
        errorCallB({
            name: 'User is currently watching',
            message: 'I hope you learned something from this lesson tutorial.'
        });
    }else{
        callB('Your doing great!! Remember that a little progress each day adds up to big results!');
    }
}

callBack1Tutorial((message)=>{console.log('This is a SUCCESSFULL CALLBACK: ' + message)},
(error)=>{console.log(error.name + ' ' + error.message)});