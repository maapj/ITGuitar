// 7. Sử dụng hàm filter lọc các số lẻ và tính tổng các số đó

const arr = [1 , 2 ,3 ,4 ,5 ,6, 7, 8, 9];

// khai báo hằng sole 
const sole = arr.filter(arr => arr %2 != 0);

//khai báo sumsole => tính tổng của sole
let sumSoLe = 0;
sole.map(function(value){
    sumSoLe += value;
})

console.log(sole);
console.log(sumSoLe);