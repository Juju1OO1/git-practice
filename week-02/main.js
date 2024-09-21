import Stack from './stack.js';

let stack = new Stack();

//測試程式
stack.push(5);
stack.push(8);
stack.print();

//測試 Stack 為空時的 pop
stack.clear();
console.log(stack.pop());
stack.print();



