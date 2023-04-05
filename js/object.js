// let array = [2023, 'rat', '1st'];
// let EPU0 = [year: 2023, name: 'rat', division: '1st'];

// let EPU1 = {
//     name: 'rat',
//     division: '1st',
//     year: 2023,
//     getPrice: function(){
//         return 500;
//     },
//     printDescription: function(){
//         console.log(this.division + ' ' + this.name)
//     }
// }

// console.log(typeof array);
// console.log(array);

// EPU1.printDescription();
// console.log(EPU1.year);
// console.log(EPU1.getPrice());

// console.log(EPU1['getPrice']);

// console.log(EPU1[1]);

// var EPU2 = {};
// EPU2.whatever = 'regie';
// console.log(EPU2.whatever);

// var a = {
//     myProperty: {b: 'hi'}
// };

// console.log(a.myProperty.b);

// var EPU3 = {
//     myProperty:[
//         {d: 'abysm'},
//         {e: 'plain'},
//         {f: 'zilch'},
//         {g: 'noir'}
//     ]
// }

// console.log(EPU3.myProperty[0]);
// console.log(EPU3.myProperty[1]);
// console.log(EPU3.myProperty[2]);
// console.log(EPU3.myProperty[3]);


// let EPC = [
//     {year: 2000, name: 'UPE1', division: 'rat'},
//     {year: 2017, name: 'UPE2', division: 'seekers'},
//     {year: 2021, name: 'UPE3', division: 'miners'}
// ]

// console.log(EPC[0])


let contact = {
    volunter: [
        {firstName:'Regie', lastName: 'Marzan', phoneNumber: ['(123) 000-00000', '(123) 322-4444']},
        {firstName:'Soli', lastName: 'August', phoneNumber: ['(123) 000-00000', '(123) 321-5542']},
    ],
    headquarters: [
        {firstName:'Regie', lastName: '', phoneNumber: ['(123) 000-00000', '(123) 333-2687']},
        {firstName:'Regie', lastName: '', phoneNumber: ['(123) 000-00000', '(123) 332-1258']},
        {firstName:'Regie', lastName: '', phoneNumber: ['(123) 000-00000', '(123) 331-2654']}
    ]
}

console.log(contact.volunter[0]);