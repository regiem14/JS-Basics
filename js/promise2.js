/*const userStopsWatching = false;
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
(error)=>{console.log(error.name + ' ' + error.message)});*/


/*const userStopsWatching = false;
const userCurrentlyWatching = true;

function callbackToPromise(){
    return new Promise((res, rej)=>{
        if(userStopsWatching){
            rej({
            name: 'The user has stopped watching',
            message: 'Bye, see you soon again!!'
            });
        }else if(userCurrentlyWatching){
            rej({
                name: 'User is currently watching',
                message: 'I hope you learned something from this lesson tutorial.'
            });
        }else{
            res('Regie is here for promise 2 test')
        }
    });
}

// console.log(callbackToPromise());

callbackToPromise().then((message)=>{
    console.log('This is a SUCCESSFUL promise: ' + message)
}).catch((èrror)=>{
    console.log(error.name + ' ' + error.message);
});*/

const userStopsWatching = false;
const userCurrentlyWatching = true;

function callbackToPromise(){
    return new Promise((res, rej)=>{
        if(userStopsWatching){
            rej({
            name: 'The user has stopped watching',
            message: 'Bye, see you soon again!!'
            });
        }else if(userCurrentlyWatching){
            rej({
                name: 'User is currently watching',
                message: 'I hope you learned something from this lesson tutorial.'
            });
        }else{
            res('Regie is here for promise 2 test')
        }
    });
}

callbackToPromise().then((m)=>
    {console.log('This is a SUCCESSFULL CALLBACK: ' + m)
}).catch((e)=>
    {console.log(e.name + ' ' + e.message);
});
