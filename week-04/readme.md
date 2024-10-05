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
| 加速運算               | 使用硬體加速器或協同處理器執行函數 （例如，浮點數計算、圖形處理或資料模式比對），比在 CPU 上執行更有效率（用 GPU） |  
| 儲存優化               | 專為需要對本機上的 Hyperscale Data Center 進行高速且連續的讀取寫入工作設計，低延遲 |  
| HPC 優化               | 適合大規模執行 HPC 工作，如：複雜模擬和深度學習 |  
    

###  - 如何選擇？
1. 比較不同的 instance type 系列，確定應用程式需求
2. 調整工作負載以選擇最佳 instance type ，評估應用程式效能、執行應用程式測試。

## 3. 什麼是 Nginx？有哪些用途與特性？    
###  - 用途說明                 
Nginx 是一款開源的網路伺服器，能夠用於多種網路服務，最主要的功能是作為網頁伺服器，處理來自網路的 HTTP 請求；也常常被使用為反向代理伺服器，提升網站的效能以及提供更高的靈活度，此外，Nginx 也能提供 load balance 的服務，以及郵件伺服器。                      

###  - Nginx 特性           
| **特性** | **說明** |  
|------------------------|----------|  
| 基礎性能| Nginx 特點為事件驅動架構與 non-blocking I/O，能夠更好地處理高流量 |        
| 配置和管理| 配置文件簡潔直觀（與 Apache 相比） |        
| 模塊和靈活性| 提供 module 功能，但必須在 compile 的時候就載入，無法動態載入|               
| 對 PHP 的支援| Nginx 可以通過 FastCGI 來處理 PHP，但需自行配置 |  
|反向代理| Client 與 Server 不需知道彼此真實位址，僅需要透過 Nginx 反向代理即可達成請求   ![反向代理](../assets/week-04/img/反向代理.png)    圖片來源：https://www.explainthis.io/zh-hant/swe/why-nginx|   
|負載均衡 |Nginx 能夠自動的將 Request 分送到不同 Server 上，而分送的演算法可以自己設計，最常使用的是 RR  ![負載均衡](../assets/week-04/img/負載平衡.png)       圖片來源：https://www.explainthis.io/zh-hant/swe/why-nginx|  
|HTTP 快取|Nginx 會利用 http 快取的機制做優化，提高效能 ![Http 快取](../assets/week-04/img/Http快取.png)    圖片來源：https://www.explainthis.io/zh-hant/swe/why-nginx|

補充：              
事件驅動架構（EDA）: 一種軟體架構模式，其中系統的行為主要是對發生的事件做出反應，在事件驅動架構中，系統的各個元件彼此之間通過發送和接收事件來進行溝通和協作，而不是直接互相調用；事件驅動架構通常包含三個主要元件：生產者（Producer）、事件代理（Event Broker）和訂閱者（Subscriber）。             

## 4. 關於 pm2 套件  

### pm2 套件是什麼？
pm2 的 pm 是 Process Manager 的意思，此套件適用在虛擬主機上，用來管理程式，pm2 可以設定 process 自動重啟、在儲存時重啟、亦或是開機自動啟動等。

### 相關指令            
1. 列出 process             
```
pm2 ls
```
![pm2Ls](../assets/week-04/img/pm2Ls.png)     

2. 啟動 process                 
（由於想啟動的是 express 專案，所以要先切到專案目錄，即/git-practice/express/backend/）             
```
pm2 start app.js
```
![pm2StJs](../assets/week-04/img/pm2StartJs.png)            

3. 開機自動執行 pm2
```
pm2 startup
```
將 startup 指令寫入
```
sudo env PATH=$PATH:/usr/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu
```
儲存設定

```
pm2 save
```

## 5. `proxy` 相關      
### 何謂 proxy          
 一般指代理伺服器，允許 server 端與 client 端進行非直接的連接，Gateway、Router 等網路裝置就具備此功能； proxy 有利於保障網路終端的隱私或安全，在一定程度上能夠阻止網路攻擊。

###  透過 Nginx 來 代理 Express 專案        
在前面有提到，Nginx 可以實現反向代理（參3. 什麼是 Nginx？有哪些用途與特性？），因此可達到下列好處：         

1. Load balance: Reverse Proxy 可以分配 server 去處理請求，控制流量       
2. Caching: 暫存加快需求處理            
3. 彈性高：若要新增功能、需求，或是改變 port，只要將 server 端連上 proxy 即可

補充：正向代理與反向代理
- 反向代理（Reverse proxy）是 proxy 的一種，根據 client 的請求從 proxy server 上取得資源，然後再將這些資源返回給 client；而正向代理（Forward Proxy）則是作為一個中繼，將 server 資源傳給眾多 client，server不知道發請求的 client 是哪一個。        

- 反向代理是在 server 端作為代理使用，而不是 client 端，client 端通過正向代理可以存取很多不同的資源，而反向代理是眾多 client 都通過它存取不同後端伺服器上的資源，而不需要知道這些後端伺服器的存在，就像所有資源都來自於這個 Reverse proxy Server，client 不知道背後服務的 server 是誰。             

- 圖例

![forwardProxy](../assets/week-04/img/forward-proxy.png)  
![reverseProxy](../assets/week-04/img/reverse-proxy.png)  
圖片來源：https://www.jyt0532.com/2019/11/18/proxy-reverse-proxy/


## 6. 在 readme 中提供步驟 9 的 Nginx 設定檔    

輸入以下指令：
```
sudo nano /etc/nginx/sites-available/default
```         

出現設定檔內容如下(已刪除多餘註解)：
```
server {
        listen 80 default_server;
        listen [::]:80 default_server;
        # 預設是 listen to port:80

        server_name _;

        location / {
                proxy_pass http://localhost:3000;
                # 將 port:3000 上的專案導到 proxy (Nginx 管理)上，再由 proxy 提供給client

                proxy_http_version 1.1;
                # 指定Nginx在向後端伺服器發送代理請求時，使用HTTP 1.1協議

                proxy_set_header Upgrade $http_upgrade;
                # 用於升級協議

                proxy_set_header Connection 'upgrade';
                # 將Connection標頭設置為upgrade

                proxy_set_header Host $host;
                # 這一行將 Host 標頭設置為 $host 變量，該變量代表 client 請求中的 Host 值

                proxy_cache_bypass $http_upgrade;
                # 如果請求包含 Upgrade 標頭，則跳過 proxy
                
                try_files $uri $uri/ =404;
                # 如果連不到就回 404
        }

```


## 7. Security Group 是什麼？用途為何？有什麼設定原則嗎？           

## 8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？ 
安裝 pm2 的時候           

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

7. Nginx 是什麼？認識 Web Server 與 Nginx 入門教學           
網址：https://tw.alphacamp.co/blog/nginx

8. Nginx 是什麼？有哪些用途？           
網址：https://www.explainthis.io/zh-hant/swe/why-nginx   

9. jyt0532's Blog
網址：https://www.jyt0532.com/2019/11/18/proxy-reverse-proxy/

## 12. 過程紀錄             