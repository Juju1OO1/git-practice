# NodeJS 環境建置 

## NodeJS版本說明    

此次安裝版本為 v18.20.4（LTS）        
 Node.js 的版本在釋出後六個月內皆處於 Current 狀態，六個月後奇數編號的釋出版本會停止支援，而偶數編號的釋出版本會進入活躍 LTS (Active LTS) 狀態，開放一般大眾使用。         

**Current** 狀態為最新版本，可能會有一些套件不支援的問題，新版本的網路相關資訊也較少。

**LTS** 狀態代表「長期支援」，在 30 個月內發現的重大錯誤通常都會得到修復，而本次安裝的 v18.20.4 目前處於 LTS 且 Maintenance 持續至 2025 年 4 月（參下圖），是目前較新且穩定的版本。

![NodeJS近期版本](../assets/week-02/img/"NodeJS-version")    
 
圖片來源：https://github.com/nodejs/release?tab=readme-ov-file#release-schedule


## nvm 與 npm 比較



|  套件  | nvm  |  npm |
| :---- | :---- | :---- |
| 說明 | （Node Version Manager）想要切換到不同版本的 Node.js 的話就需要使用 NVM ，需要額外安裝| （Node Package Manager）是 Node.js 內的套件管理工具，不需要另外下載安裝，完成 Node.js 的安裝後就可以直接下指令使用 |
| 常用 | 1. 安裝特定版本 NodeJS             $nvm install 18           | 1. 初始化專案             $npm init            |
| 語法 | 2.  切換到特定版本 NodeJS           $nvm use 18 | 2.安裝套件           $npm install bootstrap    |
|  指令 | 3. 顯示有哪些版本可用     $nvm list    | 3. 移除套件      $npm uninstall fontawesome|