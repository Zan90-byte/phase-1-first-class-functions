function callback(){
    return ("I'm helping that receiver. ");
 }
function receivesAFunction(cb, message){
    console.log(cb() + message);
}

receivesAFunction(callback, "Thank you for the help!!");

//*********************************** */

function returnsANamedFunction(){
    console.log("Hello World!");

return function namedFunction() {
    console.log("I'm a named function!")
    }
}

const myNamedFunc = returnsANamedFunction();
myNamedFunc();


//****************************** */

function returnsAnAnonymousFunction(){

    return function(){
        console.log("I'm a anonymous fucntion!");
    }

}

const myAnonymousFunc = returnsAnAnonymousFunction();
myAnonymousFunc();