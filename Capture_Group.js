// let reg = /(w+)\s(\w+)/;
// let str = 'firstName lastName';
// let newstr = str.replace(reg, '$2, $2');

// console.log(newstr);


let reg1 = /\(?(\d{3})[-.)]\d{3}[-.]\d{4}/gi;
let str1 = `222.111.2225, 888-999-7775, (567)999-9995`;
let newstr1 = str1.replace(reg1, '$1-xxx-xxx');
console.log(newstr1);