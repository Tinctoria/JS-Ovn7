// uppgift 1 
function add(x, y) {
    return x+y; 
}
console.log(add(10,20)); 

// uppgift 2 


function loop(x, y, z, n){
    let myArray= [x, y, z, n]; 
    myArray.forEach(element=>console.log(element));
}

loop("apple", "pear", "banana", "strawberry");

// uppgift 3

function isValueDivisebleWith2(x) {
    if ((x%2)===0){ 
        console.log("true"); 
    }
    else 
    console.log("false"); 
}
isValueDivisebleWith2(7);