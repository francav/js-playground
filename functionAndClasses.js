const myFunction = () => {
    console.log("Arrowed Function expression: " + myFunction);
}

class MyClass{

    constructor(){
        myFunction();
    }

    write(){
        console.log("written");
    }
}

const a = new MyClass();
a.write();