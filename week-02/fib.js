function fib(n){
    //以三個連續的 fibonacci 數為一組： fLast,fPre,fNext
    let fNext=0;
    let fLast=0;
    let fPre=1;
    
    if(n==0){
    //第0個 fibonacci 數為 0 ，直接輸出 0
        return(fLast);
    }else{
    //將 fLast,fPre 相加求出下一個 fibonacci 數存入 fNext
    //再將 fLast,fPre 各往後移一個 fibonacci 數
    //以迴圈執行到找到第 n 個 fibonacci 數 fPre
        for(let i=1;i<n;i++){
            fNext = fLast+fPre;
            fLast = fPre;
            fPre = fNext;
        };
        return (fPre);
    }
}

fib(0); // 0
fib(1); // 1
fib(5); // 5
fib(10); // 55



