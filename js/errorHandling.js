/*let a = 7 * undefined / "error handling";
console.log(a);*/

/*
function beforeTryCatch(){
    let obj = undefined;
    // console.log(obj.b);
    console.log("We should never see this if the previous line of code obj.b throws an exception");
}*/

// beforeTryCatch();


function afterTryCatch() {
    try {
        let obj = undefined;
        // if(obj == undefined){
        //     console.log(obj.b);
        // }
        console.log(obj.b);
    } catch (error) {
        console.log('I caught an exception: ' + error.message);
    } finally {
        console.log('This will happen no matter what!!!')
    }
    console.log('My application is still running');
}

afterTryCatch();