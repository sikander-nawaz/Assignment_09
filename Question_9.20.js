// 8. Write a js program to copy all elements from an array to another array.
let arr = [1,2.3,57]
let another = [] ;
for(let i = 0 ;i<arr.length ;i++){
    another.pop(arr[i])
}
 console.log(another);