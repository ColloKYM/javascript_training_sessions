console.log ("First");
console.log ("second");
console.log ("Third")




console.log ("First");
setTimeout( () => {
    console.log("Task completed");
}, 3000);
console.log ("Last");

/*
setInterval (() => {
    console.log("Hello Students!");
}, 2000);
*/

function greetUser (callback){
    console.log("Hello!");
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greetUser(sayGoodbye);