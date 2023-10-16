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

//#4
app.use("/public", express.static(__dirname + "/public"))

//#3
app.get('/',(req,res) => {
  res.sendFile(__dirname + "/views/index.html");
})
