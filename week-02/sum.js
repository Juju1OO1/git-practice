
//使用forEach()
function sum1 (ary){
    let total  = 0;
    ary.forEach(element => {
        total += element;
    });
    return total;
}

console.log(sum1([1, 5, 3, 2])); // 11

//使用reduce()
function sum2 (ary){
    //累加到哪個 Index
    let init_Index = 0;
    // sum 的初始 = 0
    let init_Value = 0;
    let total = ary.reduce(
        (accumulator, currentValue, init_Index, array) => {
            return accumulator + currentValue;
          },init_Value);
    return total;
}

console.log(sum2([1, 5, 3, 2])); // 11