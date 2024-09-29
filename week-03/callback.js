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

  
  
  