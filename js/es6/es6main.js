import U, {printName, printAge} from '../es6/es6user.js'

const user = new U('Regie', 19);
console.log(user);

printName(user);
printAge(user);