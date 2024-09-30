function doJob(job, time, cb) {
    setTimeout(() => {
      // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
      let now = new Date();
      cb(`完成工作 ${job} at ${now.toISOString()}`);
    }, time);
  }
  
// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let now = new Date();
 console.log(`開始工作 at ${now.toISOString()}`);
// write your code here

//寫法一：將 time 變數設為前面每一項任務的加總，即 time = 從開始工作到完成該任務花的時間
function method1 () {
    //刷牙為第一項任務，花 1 秒，time = 1000
    doJob('刷牙', 1000, function (data) {
      console.log(data);
    });
  //吃早餐為第二項任務，花 1+3 秒(刷牙＋吃早餐)，time = 4000
    doJob('吃早餐', 4000, function (data) {
      console.log(data);
    });
  //寫功課為第三項任務，花 1+3+1 秒(刷牙＋吃早餐+寫功課)，time = 5000
    doJob('寫功課', 5000, function (data) {
      console.log(data);
    });
  //吃午餐為第四項任務，花 1+3+1+2 秒(刷牙＋吃早餐+寫功課+吃午餐)，time = 7000
    doJob('吃午餐', 7000, function (data) {
      console.log(data);
    });
}

method1();
  
  

//寫法二：
//讓函式成為另一個函式的參數
//遞迴呼叫
function method2(){
  function brush(next) {
    doJob('刷牙', 1000, function (data) {
      console.log(data);
      next(); // 完成後call下一個任務(breakfast)
    });
  }
  
  function breakfast(next) {
    doJob('吃早餐', 3000, function (data) {
      console.log(data);
      next(); // 完成後call下一個任務(homework)
    });
  }
  
  function homework(next) {
    doJob('寫作業', 1000, function (data) {
      console.log(data);
      next(); // 完成後call下一個任務(lunch)
    });
  }
  
  function lunch() {
    doJob('吃午餐', 2000, function (data) {
      console.log(data);
      // 沒有下一個任務
    });
  }
  
  // 依次call，任務完成後再call下一個
 brush(function () {
    breakfast(function () {
      homework(function () {
        lunch();
      });
    });
  });
  }

method2();
//寫法二也等同於直接將 doJob 寫在上一個 doJob 內，但是這樣的方法會形成
//callback hell (pyramid of doom)，造成程式可讀性差、debug困難。
//使用 Promise 是比較好的做法


  