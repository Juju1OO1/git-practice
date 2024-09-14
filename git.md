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
| Logs         |       new |
| COMMIT_EDITMSG   |       new |


### amend 修改最近一個 commit 的訊息     
1. Objects > 出現紀錄      
2.COMMIT_EDITMSG變更      

| File Name  | Status |
| ------------- |:-------------:|
| config        |     unchanged |
| descrption    |     unchanged |
| HEAD          |     unchanged |
| hooks         |     unchanged |
| objects       |       changed |
| refs          |     unchanged |
| Index         |     unchanged |
| Logs          |     unchanged |
| COMMIT_EDITMSG   |      changed |


### 在工作目錄改動檔案     
1. Index > 紀錄更動   

| File Name  | Status |
| ------------- |:-------------:|
| Index         |       changed |


### restore --staged從暫存區域回到工作目錄     
1. Index > 紀錄更動      

| File Name  | Status |
| ------------- |:-------------:|
| Index         |       changed |


### restore 捨棄在工作目錄的改變(包括修改與刪除)    
1. Index變更    
2. 被修改的檔案退回上次 commit 狀態  

| File Name  | Status |
| ------------- |:-------------:|
| Index         |       changed |


### commit -am 同時 add 跟 commit     
1. Objects > 發生變動   
2. COMMIT_EDITMSG > 發生變動   
3. Index > 發生變動   

| File Name  | Status |
| ------------- |:-------------:|
| Index         |       changed |
| COMMIT_EDITMSG   |      changed |
| objects       |       changed |
  

### rm --cached從 git 暫存區中移除，但是檔案還在工作目錄   
1. Index > 紀錄更動     

| File Name  | Status |
| ------------- |:-------------:|
| Index         |       changed |



### 從 git 工作目錄完全移除    
1. Index > 紀錄更動     

| File Name  | Status |
| ------------- |:-------------:|
| Index         |       changed |


### branch新增分支
無改變


### switch切換分支   
1. HEAD > 發生變動
2. Index > 發生變動

| File Name  | Status |
| ------------- |:-------------:|
| Index         |       changed |
| HEAD         |       changed |


### merge 合併分支  
1.新增 ORIG_HEAD    
註：branch不會消失    

| File Name  | Status |
| ------------- |:-------------:|
| config        |     unchanged |
| descrption    |     unchanged |
| HEAD          |     unchanged |
| hooks         |     unchanged |
| objects       |     unchanged |
| refs          |     unchanged |
| Index         |     unchanged |
| Logs          |     unchanged |
| COMMIT_EDITMSG   |  unchanged |
| ORIG_HEAD    |       new |

### Delete branch刪除本地分支
1. config > 發生變動
2.新增 packed-refs 

| File Name  | Status |
| ------------- |:-------------:|
| config        |       changed |
| descrption    |     unchanged |
| HEAD          |     unchanged |
| hooks         |     unchanged |
| objects       |     unchanged |
| refs          |     unchanged |
| Index         |     unchanged |
| Logs          |     unchanged |
| COMMIT_EDITMSG   |  unchanged |
| ORIG_HEAD    |       unchanged  |
| packed-refs    |       new  |


### 修改分支名稱
1. config > 發生變動     
2. HEAD發生變動   

| File Name  | Status |
| ------------- |:-------------:|
| config        |       changed |
| descrption    |     unchanged |
| HEAD          |       changed |
| hooks         |     unchanged |
| objects       |     unchanged |
| refs          |     unchanged |
| Index         |     unchanged |
| Logs          |     unchanged |
| COMMIT_EDITMSG   |  unchanged |
| ORIG_HEAD    |       unchanged  |
| packed-refs    |     unchanged  |


# commit message style
分為三大部分  
- Type：Subject  
- Body   
- Footer  

| 類型  | 說明 |
| ------------- |:-------------:|
| Feat  |    新功能  |
|  Modify |    既有功能需求調整的修改  |
|  Fix |    錯誤修正  |
| Docs |    更新文件  |
| Style |   程式碼格式調整，不影響程式碼運行，如：white-space, formatting。 |
|  Refactor |    重構，針對已上線的功能程式碼調整與優化，且不改變既有邏輯。  |
|  Test|   測試，如：新增測試、重構測試等 |
|  Chore|   更新專案建置設定、更新版本號等瑣事。  |
|  Revert|   撤銷之前的commit。 |

## Subject 主旨
不應超過50個字元，若用英文書寫則需大寫開頭，中英文都不用句號結尾。
盡量以祈使句書寫，言簡意賅的簡述此Commit的改動。

## Body 本文
非必須，撰寫本文時務必將修改項目與原因寫清楚。
每行不超過72個字。

## Footer頁尾
非必須，通常用來標註對應的 issue 編號。


# 其他問題

## 如何移除本機端repo的版控
Ans:刪除.git
或輸入command  $ rm -rf .git

## 建立 GitHub repo 之授權問題
現在 Github 已不支援帳號登入，可用 SSH 連線授權   

1. 先產生 SSH  key    
$ ssh-keygen -t ed25519 -C "your_email@example.com    

2. 產生以後至 /Users/UserName/.ssh/id_ed25519.pub 複製全部內容，     
此為加密公鑰，至 github repo 內的 setting > deploy keys > add deploy keys
將 id_ed25519.pub 內容貼到 keys 


3. 將 SSH key 加到 SSH agent   
$ eval "$(ssh-agent -s)"   
$ ssh-add ~/.ssh/id_ed25519    

