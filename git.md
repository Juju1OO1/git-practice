# Github 相關解釋      

## 名詞解釋

### - Blob  
又稱為Binary large object，一種物件類型，每當新增一   
個檔案到暫存區（add）的時候會有一個 blob 物件產生，這   
個物件會紀錄檔案的內容，但不會紀錄檔名，這些 Blob 被紀      
在 .git 資料夾下的 Objects 資料夾，此路徑下的目錄為兩       
位數字元，檔案名稱是以 sha-1 雜湊演算法儲存。


### - Tree
一種物件類型，git 中負責儲存特定目錄下的所有資訊，包含     
該目錄下的檔名(最主要)、對應的 blob 物件名稱、檔案連結     
或其他 tree 物件，由於 tree 物件可以包含其他 tree 物    
件，所以瀏覽的方式與檔案系統中的資料夾相似。


### - Commit
一種物件類型，用來記錄有哪些 tree 物件包含在版本中，一個      
commit 物件代表著 Git 的一次新增（到暫存區），記錄提交    
版本有哪些 tree 物件、以及提交時間、message等等，通常還     
會記錄上一層的 commit 物件名稱。


### - Branch
git 中的分支機制，最主要的目的就是用來解決開發過程中版本衝    
突的問題，當協作開發時長會發生一個 issue 同時多人進行的狀   
況，適度的建立 branch、merge 分支可以提高團隊效率，但若分  
支控管不佳也可能產生版本衝突問題，也因此部分人會盡力避免       
分支的情況發生。


### - HEAD
一個指標，指向某一個分支，可以把 HEAD 當做目前所在分支看待。


### - Tag
一個容器，用來關聯特定一個 commit、blob、tree 物件，並額     
外儲存一些參考資訊如：tag 名稱，使用 tag 物件最常見的情況    
是替特定一個版本的 commit 物件標示一個易懂的名稱，可能是代   
表某個版本。


## git 指令操作觀察

### git init
1. 檔案中出現 .git 資料夾，顯示此檔案已被 git 追蹤。
2. .git 資料夾內部有六個檔案


| File Name  | Status |
| ------------- |:-------------:|
| config        |           new |
| descrption    |           new |
| HEAD          |           new |
| hooks         |           new |
| objects       |           new |
| refs          |           new |




### mkdir 在工作目錄建立檔案
無變化

### add 把檔案從工作目錄加到暫存區
1. 新增 Index
2. Objects 資料夾：如果內部檔案有改動則出現紀錄      

| File Name  | Status |
| ------------- |:-------------:|
| config        |     unchanged |
| descrption    |     unchanged |
| HEAD          |     unchanged |
| hooks         |     unchanged |
| objects       |       changed |
| refs          |     unchanged |
| Index         |           new |


### commit提交暫存區的檔案到儲存庫
1. Index變更
2. Objects > 出現紀錄
3. 新增 logs 檔案
4. logs  >新增HEAD
5. logs > 新增refs >heads >main
6. 新增COMMIT_EDITMSG    

| File Name  | Status |
| ------------- |:-------------:|
| config        |     unchanged |
| descrption    |     unchanged |
| HEAD          |     unchanged |
| hooks         |     unchanged |
| objects       |       changed |
| refs          |     unchanged |
| Index         |       changed |
| Logs         |       changed |
| COMMIT_EDITMSG   |       changed |