// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers) {
    let avgNumber = 0;
    for ( const number of numbers){
        avgNumber = number + avgNumber;  
    }
    return avgNumber / numbers.length;

}

const arr = make_avg([4, 6, 8, 12, 7, 9, 5]);
console.log(arr)

