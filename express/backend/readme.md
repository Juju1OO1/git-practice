### Dependencies 與 DevDependencies
### package.json 中的 scripts 這個區塊怎麼用？
### Port number 要怎麼以環境變數來設定？      

1. 先將 app.js 中 port = 3000 寫死的設定改成：     
```
const port = process.env.PORT || 3000;
//讀取環境變數設定的 PORT，如果沒有找到則使用 3000
```      

2. 設定環境變數

### 關於哪些檔案應該要被放上 github repo?
### require 與 import/export、 CJS vs ESM，這兩者分別怎麼用？
### 補充
