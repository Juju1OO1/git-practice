export default class Stack {
    //錯誤：在export 的時候出現“Unexpected token 'export'”
    //原因：在版本 v14.13.0 之前 NodeJS 未支援 ESM （要用 module.exports ），
    // v14.13.0 以後有支援（可直接） export 但是要在 package.json 加入參數 "type":"module"
   
	//標籤解釋
    // TODO：表示待實現的功能。
    // FixMe： 有問題或者不能運作的程式碼，需要修正。
    // XXX：雖然功能已經實作，但實作方法有待商榷，希望能進行改進。
    #items;
  constructor() {
    this.#items = [];
  }

  // 在 stack 頂部加入元素i
  push(element) {
        //抓取array之長度，並在其最後一個元素之後一位加入element
        this.#items[this.#items.length] = element;
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
    if ((this.#items.length)==0){
        //若 array 內無元素則回傳警示
        return "The Stack is Empty."
    }else{
         //若 array 內有元素則回先存取最後一個元素，再將其從 array 內刪除
        let rm = this.#items[this.#items.length-1];
        this.#items.splice(this.#items.length-1,1);
        // 回傳被刪除的最後一個元素
        return rm;

    }
    
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    if ((this.#items.length)==0){
         //若 array 內無元素則回傳警示
        return "The Stack is Empty."
    }else{
         //若 array 非空則回傳最後一個元素
        return (this.#items[this.#items.length-1]);
    }
  }

  // 檢查 stack 是否為空
  isEmpty() {
    if ((this.#items.length)==0){
        return true;
    }else{
        return false;
    }
  }

  // 回傳 stack 中元素的個數
  size() {
    return this.#items.length;
  }

  // 清空 stack 
  clear() {
    this.#items.splice(0,this.#items.length);
  }

  // 印出 stack 內容
  print() {
    console.log(this.#items);
  }
} 

//補充 export
// export 的語法有兩種，一種是 export name 另一種是 export default name 
// 差別在於 import 時，如果是單純的 export name 話，
// 在 import 時就必須要將 name 定義的跟 export 的 name 一模一樣，
// 所以就要寫成 import { name } from 'module' ，

// 假如是寫 export default name 的話，
// 在 import 的時候就不用將 name 定義的跟 export 的 name 一樣，相對會彈性很多。








