var name = 'My name is ' + 'Regie'
let names = ['Red', 'Blue', 'Green', 'Yellow'];
let others = ['white', 'black', 'orange', 'gray'];

let lost = [4,8,15,16,23,42];
let fibonacci = [1,1,2,3,5,8,13,21,34,55];

var combine = lost.concat(fibonacci);

// console.log(typeof fibonacci.join('~'));

// console.log(typeof fibonacci);

// console.log(lost.shift());
// console.log(lost);

// lost.unshift(1,2,3,4);
// console.log(lost);

// console.log(names);
// console.log(names.reverse());

// console.log(names.sort());

// console.log(others.indexOf('gray'));

// console.log(combine);
// console.log(combine.lastIndexOf(4));

// var filtered = combine.filter((x) => {if (x <= 8) return x;})

// var filtered = names.filter((x) => {if (x == 'Blue') return x;})
// var filtered = names.filter((x) => {if (x != 'Blue') return x;})

// console.log(filtered)

names.forEach((name)=> console.log(`howdy ${name}`));

// console.log(filtered.every((num)=>num< 10));

console.log(fibonacci.some((num)=> num > 50));
console.log(fibonacci.some((num)=> num > 100));
