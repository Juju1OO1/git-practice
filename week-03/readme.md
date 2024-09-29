# AWS 帳號註冊      

## 什麼是 AWS Region  
<!-- <div style="text-align: justify;">     -->
+ Amazon 將服務區域分隔為多個，每個區域皆與其他區域隔離，以達到最高的**容錯能力與穩定性**。                   
+ 檢視資源時只會看到自己區域的資源，而且不會自動跨區域複寫資源。        
+ 啟動專案時必須選取 AMI 位於相同區域中的專案，如果 AMI 位於另一個區域中，可以將 AMI 其複製到自己的區域。        
（補充：Amazon 機器映像 (AMI) 是提供設定和啟動 Amazon EC2 專案所需軟體的映像檔，每個AMI包含一個區塊裝置對應，指定要連接至您啟動的專案的區塊裝置，必須在啟動執行個體AMI時指定；一個 AMI 包含以下屬性：地區、作業系統、處理器架構、 root 設備類型、虛擬化類型。）        
+下表為 AWS 各區域之代碼及手動啟用狀況
|Code|Name|Opt-in status|
| :---- | :---- | :---- |
|us-east-1|US East (N. Virginia)|Not required|
|us-east-2|US East (Ohio)|Not required|
|us-west-1|US West (N. California)|Not required|
|us-west-2|US West (Oregon)|Not required|
|af-south-1|Africa (Cape Town)|Required|
|ap-east-1|Asia Pacific (Hong Kong)|Required|
|ap-south-2|Asia Pacific (Hyderabad)|Required|
|ap-southeast-3|Asia Pacific (Jakarta)|Required|
|ap-southeast-5|Asia Pacific (Malaysia)|Required|
|ap-southeast-4|Asia Pacific (Melbourne)|Required|
|ap-south-1|Asia Pacific (Mumbai)|Not required|
|ap-northeast-3|Asia Pacific (Osaka)|Not required|
|ap-northeast-2|Asia Pacific (Seoul)|Not required|
|ap-southeast-1|Asia Pacific (Singapore)|Not required|
|ap-southeast-2|Asia Pacific (Sydney)|Not required|
|ap-northeast-1|Asia Pacific (Tokyo)|Not required|
|ca-central-1|Canada (Central)|Not required|
|ca-west-1|Canada West (Calgary)|Required|
|cn-north-1|China (Beijing)|Not required|
|cn-northwest-1|China (Ningxia)|Not required|
|eu-central-1|Europe (Frankfurt)|Not required|
|eu-west-1|Europe (Ireland)|Not required|
|eu-west-2|Europe (London)|Not required|
|eu-south-1|Europe (Milan)|Required|
|eu-west-3|Europe (Paris)|Not required|
|eu-south-2|Europe (Spain)|Required|
|eu-north-1|Europe (Stockholm)|Not required|
|eu-central-2|Europe (Zurich)|Required|
|il-central-1|Israel (Tel Aviv)|Required|
|me-south-1|Middle East (Bahrain)|Required|
|me-central-1|Middle East (UAE)|Required|
|sa-east-1|South America (São Paulo)|Not required|


<!-- </div> -->



## 什麼是 AZ