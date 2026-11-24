const payment = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const paymentSuccessful = false;

        if (paymentSuccessful) {
            resolve("Payment completed!");
        } else {
            reject("Payment failed");
        }
    }, 1000);
});

payment
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Payment process finished.");
});

const userPromise = Promise.resolve("User loaded");
const productPromise = Promise.resolve("Products loaded");
const ordersPromise = Promise.resolve("Orders loaded.");

Promise.all([userPromise, productPromise, ordersPromise])
.then((results) => {
    console.log(results);
});

async function greet () {
    return "Hello Students!";
}

greet().then((message) => {
    console.log(message);
})

/* Await waits for a promise inside a function */
/*
function getData () {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve ("Student results loaded!");
        }, 2000);
    });
}

async function displayData() {
    console.log ("Loading...");
    const result = await getData ();
    console.log(result);
}

displayData ();
*/

function getData (){
    return new Promise((resolve, reject) => {
    setTimeout (() => {
        const requestWorked = true;

        if (requestWorked) {
            resolve ("Student results loaded!");
        } else {
            reject ("Could not load student results.");
        }
    }, 1000);
});
}

async function displayData () {
    try {
        console.log("Loading...");

        const result = await getData();
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Finished loading attempt.");
    }
}
displayData();