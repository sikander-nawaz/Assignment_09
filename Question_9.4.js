// 4. Write a JS code to find the power of a number using for loop
function power(base,exponent){
    let res = 1;
    for(let i = 0; i< exponent;i++){
        res*=base
    }
    return res;
}
console.log(power(-3,7))