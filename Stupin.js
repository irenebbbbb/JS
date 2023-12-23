let x = Number(prompt('Введіть число, яке Ви хочете піднести в ступінь'));
let y = Number(prompt('У яку ступінь будемо підносити?'));
let result = 1;

for(let i = 0; i < y; i++) {
 result *= x;
}

console.log(result);