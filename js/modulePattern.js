var counter = (function(){

    let count = 0;

    function print(message){
        console.log( message + '---' + count)
    }

    return{
        value: count,
        increment: function(){
            count += 1;
            // count = count + 1;
            print('After Increment')
        },
        reset: function(){
            print('Before reset:');
            count = 0;
            print('After reset:');
        }
    }
})();

console.log(counter.count);
// console.log(counter.value);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
// console.log(counter.value);


