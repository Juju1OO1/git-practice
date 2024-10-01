
// 使用forEach()
function sum1 (ary){
    let total  = 0;
    ary.forEach(element => {
        total += element;
    });
    return total;
}

console.log(sum1([1, 5, 3, 2])); // 11

// 使用reduce()
function sum2 (ary){
    // sum 的初始 = 0
    let initValue = 0;
    let total = ary.reduce (
        (accumulator, currentValue) => {
            return accumulator + currentValue;
          },initValue );
    return total;
}

console.log(sum2([1, 5, 3, 2])); // 11


