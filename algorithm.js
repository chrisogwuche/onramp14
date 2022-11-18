let arr = [9, 3, '7', '3'];
function sumArr(arr) {
    
    return arr.reduce((a, b) => parseInt(a)+ parseInt(b));
}
console.log(sumArr(arr));