

function insertElement() {
    let array = [1, 2, 3, 4, 5];

    let ind = 3;

    let elem = 8;
  
    array.splice(ind, 0, elem);
    console.log(array);
}

insertElement();