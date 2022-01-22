// const value = require('./1_moduleSystem');
const {odd , even} = require('./01_moduleSystem'); // 구조분해 할당을 통해 보다 쉽게 변수에 값 넣기

function checkOddOrEven(num){
    if(num % 2){
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;