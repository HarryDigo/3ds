import factorial from './module_b.js';
import {sum, div} from './calc.js'; 
import getStudents from './module_d.js';

console.log(sum(factorial(5), div(factorial(6), 100)));
console.log(getStudents());

getStudents().map(({ nome }) => console.log(nome));
getStudents()
    .filter(({ situacao }) => situacao == "real")
    .map(({ nome }) => console.log(nome));

//mlem :3