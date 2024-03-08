// 6. Sử dụng hàm Map tính tổng các số trong mảng
const arr = [1 , 2 ,3];

// khai báo sum 
let sum = 0;
// duyệt qua các giá trị của mảng + vào sum
arr.map(function(value){
    sum += value;
})

//in sum ra
console.log(sum);