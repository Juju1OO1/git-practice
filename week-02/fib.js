function fib(n){
    //以三個連續的 fibonacci 數為一組： F_last,F_pre,F_next
    let F_next=0;
    let F_last=0;
    let F_pre=1;
    
    if(n==0){
    //第0個 fibonacci 數為 0 ，直接輸出 0
        console.log(F_last);
    }else{
    //將 F_last,F_pre 相加求出下一個 fibonacci 數存入 F_next
    //再將 F_last,F_pre 各往後移一個 fibonacci 數
    //以迴圈執行到找到第 n 個 fibonacci 數 F_pre
        for(i=1;i<n;i++){
            F_next = F_last+F_pre;
            F_last = F_pre;
            F_pre = F_next;
        };
        console.log(F_pre);
    }
}

fib(0); // 0
fib(1); // 1
fib(5); // 5
fib(10); // 55



