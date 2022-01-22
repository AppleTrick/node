const sayNode = () =>{
    console.log("node");
}

const es = 'ES';
const newObject = {
    sayJs(){
        console.log("js");
    },
    sayNode,
    [es + 6] : 'Fantastic'  // 객체 자체에 변수를 불러올 수 있음
}


newObject.sayNode();    // node
newObject.sayJs();      // JS
console.log(newObject.ES6); // Fantastic