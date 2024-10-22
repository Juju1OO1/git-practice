# 1. 網址       
https://zy.papperhelper.xyz           


# 2. 網域購買           
小組統一購買，是由 GoDaddy 提供的網域。                                       
主要 domain name 是 papperhelper.xyz ，各組員的子網域則是在 domain name 前加上名字如： zy.              papperhelper.xyz。                                                 

# 3. DNS 的 A record 是什麼？
A -> address ，是最基礎的 DNS 記錄類型，表示給定網域的 IP 位址。                    
A 記錄只會保留 IPv4 位址，如果網站有 IPv6 位址，它將改為使用「AAAA」記錄。          
自己網域的 A record ：              
![Arecord](../assets/week-05/img/Arecord.png)       

# 4. DNS 的 NS record 是什麼？
名稱伺服器，名稱伺服器記錄指向哪個 DNS 伺服器對該網域具有權威性，即可從該伺服器找到網域的 IP 位址，一個網域通常會有多個 NS 記錄，這些記錄可指示該網域的主要和次要名稱伺服器。               
自己網域的 NS record ：         
![NSrecord](../assets/week-05/img/NSrecord.png)


# 5. Domain Name vs FQDN vs URL 這三者分別為何？
# 6. 為什麼應該要為網站加上憑證？而不是直接用 http 就好？