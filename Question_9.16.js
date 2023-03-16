// 4. Write a js program to find maximum and minimum element in an array.
// Find Max Number
// let rollNumbers = [45,678,5566,-9983,786] ;
// let maximum = Number.MIN_SAFE_INTEGER ;
// for(let i = 0 ;i < rollNumbers.length ;i++){
//     if(maximum < rollNumbers[i]){
//         maximum= rollNumbers[i]

//     }
// }
// console.log(maximum);


// Find Min Number
let ag = [45,678,5566,-9983,786] ;
let minimum = Number.MAX_SAFE_INTEGER ;
for(let i = 0 ;i < ag.length ;i++){
    if(minimum > ag[i]){
        minimum= ag[i]

    }
}
console.log(minimum)