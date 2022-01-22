const { odd , even} = require('./01_moduleSystem');
const checkNumber = require('./02_moduleSystem1');

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd
    }
    return even;
}
console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));