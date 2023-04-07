/*function sum(...0){
    let total = 0;
    for(let i in args){
        total += args[i];
    }
    return total;
}

console.log(sum(1,2,3,4, 20,40));*/


/*function checkout(...items){
    let total = 0;
    for(let i in items){
        total += items[i];
    }
    return total;
}

console.log("the total is: $" + checkout(10, 40, 30));*/


function displayName(first, last, ...middle){
    console.log("Welcome Volunteers " + first, middle.join(''), last + " to Expedition");
}

// console.log(displayName("Regie", "M", "Marzan", "Arnis", "Syndra"));

displayName("Regie", "M", "Marzan", "Arnis", "Syndra");
