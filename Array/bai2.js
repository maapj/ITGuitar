// /2. Sử dụng hàm Map + Hàm ở bài 1 in ra các 
//số nguyên tố trong mảng đã cho trước

const arr = [1,2,3,4,5,6,7,8,9];

function isprime(n){
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố
    
    let flag = true;

    if (n <2) return flag = false; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
    
    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    let i = 2;
    while(i <n){
        if( n%i==0 ) {
            flag = false;
            break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
        }
        i++;
    }

    return flag;
}

const arrPrime = arr.map(isprime);
console.log(arrPrime);

