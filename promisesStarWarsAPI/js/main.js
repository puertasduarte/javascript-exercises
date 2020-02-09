// The script return the first five persons and its height average.

function getFirstFive(){
    let promisesArr = [];
    for (let i = 1; i < 6; i++) {
        let promise = new Promise((resolve, reject) => {
            fetch("https://swapi.co/api/people/"+i+"/")
                .then(response => {
                    resolve(response.json());
            });
        })
        promisesArr.push(promise);
    }
    console.log(promisesArr);
    Promise.all(promisesArr).then(firstFive => {
        let midHeight = firstFive.reduce((acc,person) => acc+(person.height/5),0);
        console.log(midHeight);
        console.log(firstFive);
    })
};

getFirstFive();