const promiseOne = new Promise((resolve,reject)=>{
    resolve("This is Promise One!")
});

const promeseTwo = new Promise((resolve,reject)=>{
    resolve("This is Promise Two!")
});

const promeseThree = new Promise((resolve,reject)=>{
    resolve("This is Promise Three!")
});


/*Promise.all([
    promiseOne, 
    promeseTwo, 
    promeseThree]).then((m)=>
    (console.log(m)
));*/

/*Promise.race([
    promiseOne, 
    promeseTwo, 
    promeseThree]).then((m)=>
    (console.log(m)
));*/


function sleep(time, value, state){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            if(state === "fulfill"){
                return resolve(value);
            }else{
                return reject(new Error(value));
            }
        }, time);
    });
}

const p1 = sleep(5000, "P1 one", "fulfill");
const p2 = sleep(1000, "P2 two", "fulfill");

Promise.race([p1,p2]).then((value)=>{
    console.log(value);
})