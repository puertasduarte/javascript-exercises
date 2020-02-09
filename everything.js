function every(array, test) {
    let filteredArr = array.filter(test);
    if (filteredArr.length === array.length){
        return true;
    } else { return false} 
}
  
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true