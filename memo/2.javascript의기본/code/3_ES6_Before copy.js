var sayNode = function(){
    console.log("node");
}

var es = 'ES';
var oldObject = {
    sayJs : function(){
        console.log('JS');
    },
    sayNode : sayNode
}

oldObject[es + 6] = 'Fantastic';

oldObject.sayNode();    // node
oldObject.sayJs();      // JS
console.log(oldObject.ES6); // Fantastic