let x = Number(prompt('Введіть число, яке Ви хочете піднести в ступінь'));
let y = Number(prompt('У яку ступінь будемо підносити?'));
function pow(x, y) {
 if (y > 0) {
 return x * pow(x, y - 1);
 } else {
 return 1;
 }
}
console.log(pow(x, y));