# 問題討論
## 1.  instance 的 public IP            
http://43.207.204.110           

## 2. 什麼是 instance type?           
###  - 說明
不同的開發專案擁有不同的需求、目標、預算，因此需要各式各樣的資源組合（如：CPU、記憶體、儲存體和網路流量）來支援，instance type 即是不同的資源組合，AWS 依據各項資源組合特點將 instance type 分為以下大類：

| **類別** | **適用** |  
|------------------------|----------|  
| 一般用途               | 可用於各種一般工作，如 Web 伺服器和程式碼儲存庫 |  
| 運算優化               | 適合運算密集型應用程式，如：batch、高效能 Web 伺服器、高效能運算 (HPC)、遊戲 Server |  
| 記憶體優化             | 針對記憶體密集型工作，加速記憶體內處理大型資料集 |  
| 加速運算               | 使用硬體加速器或協同處理器執行函數 (例如，浮點數計算、圖形處理或資料模式比對)，比在 CPU 上執行更有效率（用 GPU） |  
| 儲存優化               | 專為需要對本機上的 Hyperscale Data Center 進行高速且連續的讀取寫入工作設計，低延遲 |  
| HPC 優化               | 適合大規模執行 HPC 工作，如：複雜模擬和深度學習 |  
    

###  - 如何選擇？
1. 比較不同的 instance type 系列，確定應用程式需求
2. 調整工作負載以選擇最佳 instance type ，評估應用程式效能、執行應用程式測試。


## 3. 什麼是 Nginx？有哪些用途與特性？          

## 4. 關於 pm2 套件         

## 5. 步驟 9 中提到的 `proxy` 是什麼意思？為什麼要透過 Nginx 來 `proxy` 到Express 開發的 Web Server?（ 提示 `Reverse proxy` vs `Forward Proxy`）            

## 6. 在 readme 中提供步驟 9 的 Nginx 設定檔            

## 7. Security Group 是什麼？用途為何？有什麼設定原則嗎？           

## 8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？            

## 9. Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？          

## 10. 問題補充         

## 11. 本作業參考資料           
1. 在 Ubuntu 22.04 安裝 Nginx 網頁伺服器，並架設多個網站（多網域）              
網址：https://ui-code.com/archives/667#google_vignette        

2. Stackoverflow        
網址：https://stackoverflow.com/questions/31476232/node-js-server-listening-on-port-3000-but-i-cant-view-it-in-browser       
3. 使用 pm2 管理 Node.js 服務           
網址：https://noob.tw/pm2/       

4. 前端壹兩三事                
網址： https://medium.com/前端壹兩三事/聊聊關於基本的-nginx-reverse-proxies-and-nodejs-express-web-server-2a1c8e7e7de1          
5. 波波的前後端隨筆         
網址：https://lidemy5thwbc.coderbridge.io/2021/09/09/ngix/      

6. ChatGPT


## 12. 過程紀錄             