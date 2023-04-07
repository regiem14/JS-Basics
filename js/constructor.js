/*let epu = {
    name: 'rat',
    division: '1st',
    batch: 'a'
}*/


/*function Epu(name, division, batch){
    this.make = name;
    this.division = division,
    this.batch = batch
}

// let epd = new Epu('rat','1st', 14);
let epd = new Epu('rat','1st');

console.log(epd);*/


function MyFunction(){
    return {console: console.log("Regie is here, is create a simple function.")}
}

let myFunction = new MyFunction();
console.log(MyFunction);
console.log(typeof MyFunction);

console.log(myFunction);
console.log(typeof myFunction);

console.log(myFunction.console);