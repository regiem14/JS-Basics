/*class epu{

};

let epu = class {

};*/


class epu{
    constructor(name,division,batch,color){
        this.name = name;
        this.division = division;
        this.batch = batch;
        this.color = color;
    }
    print(){
        console.log(`${this.name} ${this.division} ${this.batch} ${this.color}`);
    }
}

let techsEpu = new epu('lion', '4th', 17);
console.log(typeof techsEpu);
// techsEpu.print();

class UnitsDispatch extends epu{
    constructor(name,division,batch,color){
        super(name,division,batch);
        this.color = color;
    }
    vanguard(){
        console.log('They are guard front ' + this.division);
    }

    show(){
        console.log(this.color);
    }
}

let hqUnitsDispatch = new UnitsDispatch('hellhound', '80th', 23, 'red');

hqUnitsDispatch.print();
// hqUnitsDispatch.vanguard(); 
hqUnitsDispatch.show();