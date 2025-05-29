
var createHelloWorld = function() {
    let x="Hello World"
    return function(...args) {
       return x.toString() 
    }
};

