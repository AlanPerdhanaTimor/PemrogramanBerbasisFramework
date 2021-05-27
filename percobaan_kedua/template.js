let fname = 'Cristian';
let lname = 'Ronaldo';
let age = prompt("Masukan umur C.Ronaldo !");


//cara lama
// let result = fname + '' + lname + 'is' + age + 'years old';
// alert

// pake template strings

let result = `${fname} ${lname} is ${age} years old`;
alert(result);