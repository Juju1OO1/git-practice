# AWS 帳號註冊      

## 什麼是 AWS Region  

+ Amazon 將服務區域分隔為多個，每個區域皆與其他區域隔離，以達到最高的**容錯能力與穩定性**。                   
+ 檢視資源時只會看到自己區域的資源，而且不會自動跨區域複寫資源。        
+ 啟動專案時必須選取 AMI 位於相同區域中的專案，如果 AMI 位於另一個區域中，可以將 AMI 其複製到自己的區域。        
（補充：Amazon 機器映像 (AMI) 是提供設定和啟動 Amazon EC2 專案所需軟體的映像檔，每個AMI包含一個區塊裝置對應，指定要連接至您啟動的專案的區塊裝置，必須在啟動執行個體AMI時指定；一個 AMI 包含以下屬性：地區、作業系統、處理器架構、 root 設備類型、虛擬化類型。）             
+ 下表為 AWS 各區域之代碼及手動啟用狀況    

| 代碼            | 地區                         | 手動加入 |
| :------------- | :--------------------------- | :------------ |
| us-east-1      | US East (N. Virginia)         | 不需要  |
| us-east-2      | US East (Ohio)                | 不需要  |
| us-west-1      | US West (N. California)       | 不需要  |
| us-west-2      | US West (Oregon)              | 不需要  |
| af-south-1     | Africa (Cape Town)            | 需要      |
| ap-east-1      | Asia Pacific (Hong Kong)      | 需要      |
| ap-south-2     | Asia Pacific (Hyderabad)      | 需要      |
| ap-southeast-3 | Asia Pacific (Jakarta)        | 需要      |
| ap-southeast-5 | Asia Pacific (Malaysia)       | 需要      |
| ap-southeast-4 | Asia Pacific (Melbourne)      | 需要      |
| ap-south-1     | Asia Pacific (Mumbai)         | 不需要  |
| ap-northeast-3 | Asia Pacific (Osaka)          | 不需要  |
| ap-northeast-2 | Asia Pacific (Seoul)          | 不需要  |
| ap-southeast-1 | Asia Pacific (Singapore)      | 不需要  |
| ap-southeast-2 | Asia Pacific (Sydney)         | 不需要  |
| ap-northeast-1 | Asia Pacific (Tokyo)          | 不需要  |
| ca-central-1   | Canada (Central)              | 不需要  |
| ca-west-1      | Canada West (Calgary)         | 需要      |
| cn-north-1     | China (Beijing)               | 不需要  |
| cn-northwest-1 | China (Ningxia)               | 不需要  |
| eu-central-1   | Europe (Frankfurt)            | 不需要  |
| eu-west-1      | Europe (Ireland)              | 不需要  |
| eu-west-2      | Europe (London)               | 不需要  |
| eu-south-1     | Europe (Milan)                | 需要      |
| eu-west-3      | Europe (Paris)                | 不需要  |
| eu-south-2     | Europe (Spain)                | 需要      |
| eu-north-1     | Europe (Stockholm)            | 不需要  |
| eu-central-2   | Europe (Zurich)               | 需要      |
| il-central-1   | Israel (Tel Aviv)             | 需要      |
| me-south-1     | Middle East (Bahrain)         | 需要      |
| me-central-1   | Middle East (UAE)             | 需要      |
| sa-east-1      | South America (São Paulo)     | 不需要  |


  






## 什麼是 AZ