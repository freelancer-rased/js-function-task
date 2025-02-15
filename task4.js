// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function  count_zero (number){
    let count = 0;
    for(const num of number){
        if (num === "0"){
            count++
        }
    }
    return count;
}

const binaryNumber = count_zero("01010011001010101");
console.log(binaryNumber);