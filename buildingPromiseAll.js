// Implement something like promise.all as a regular function called Promise_all:

function Promise_all(promisesArr) {
    let promisesResolved = [];
    return new Promise((resolve, reject) => {
        for (let promise of promisesArr) {
            promise.then(data => {
                promisesResolved.push(data);
                if(promisesArr.length === promisesResolved.length) { resolve(promisesResolved); }
            }).catch(reject);
        }
        if (promisesArr.length === 0) { resolve(promisesResolved) };
    })
}

// Test code:
Promise_all([]).then(array => {
    console.log("This should be []:", array);
});

function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500);
    });
}

Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
});

Promise_all([soon(1), Promise.reject("X"), soon(3)])
    .then(array => {
        console.log("We should not get here");
    })
    .catch(error => {
        if (error != "X") {
            console.log("Unexpected failure:", error);
        }
    });