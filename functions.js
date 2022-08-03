const myFunction = () => {
    console.log("Arrowed Function expression: " + myFunction);
}

const myFunction1 = function(){
    console.log("Anonymous Function expression: " + myFunction1);
}

const myFunction2 = function myFunction2(){
    console.log("Named Function expression: " + myFunction2);
}

function myFunction3() {
    console.log("Function declaration: " + myFunction3);
}




myFunction();
myFunction1();
myFunction2();
myFunction3();