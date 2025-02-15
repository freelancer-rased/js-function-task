// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function numbers (num){
    if (num % 2 === 1){
        num = num * 2;
    }
    else if (num % 2 === 0){
        num = num / 2;
    }
    return num;
}

const checkNumber = numbers(15);
console.log(checkNumber);