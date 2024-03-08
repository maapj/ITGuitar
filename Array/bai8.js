// 8. Sử dụng hàm Filter lọc các số nguyên tố

const arr = [1 , 2 ,3 ,4 ,5 ,6, 7, 8, 9]

const arrPrime = arr.filter(function isprime(arr){
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố
    
    let flag = 1;

    if (arr <2) return flag = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
    
    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    let i = 2;
    while(i <arr){
        if( arr%i==0 ) {
            flag = 0;
            break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
        }
        i++;
    }

    return flag;
})

console.log(arrPrime);