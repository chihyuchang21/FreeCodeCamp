let express = require('express');
let app = express();

//#1
//將字串輸出訊息到控制台
//console.log("Hello World")

/*#2
定義GET請求，匹配'/'根路徑，請求&響應物件，
當用戶訪問根路徑（/）時，Express 應用程式會回應客戶端，並顯示 'Hello Express'
app.get('/',(req,res) => {
  res.send('Hello Express');
})
*/

/*#4
當應用程式收到以 "/public" 開頭的HTTP請求時，Express框架會把該請求映射到伺服器上的目錄__dirname + "/public"，並且把相對應的靜態文件返回給客戶端
*/
app.use("/public", express.static(__dirname + "/public"))


/*#3
Express應用程式的路由設定。當應用程式接收到根目錄（"/"）的GET請求時，它會回傳伺服器上"/views/index.html"這個檔案的內容
*/
app.get('/',(req,res) => {
  res.sendFile(__dirname + "/views/index.html");
})

/*#5
Express應用程式的路由設定。當應用程式接收到路徑為"/json"的GET請求時，它會回傳一個JSON格式的回應
*/
app.get('/json',(req,res) => {
  res.json({"message":"Hello json"})
})
