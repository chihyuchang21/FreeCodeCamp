let express = require('express'); //將Express.js框架加載到express變數中
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

/*#7
這個middleware的功能是將收到的請求的方法（req.method）、路徑（req.path）和客戶端 IP 地址（req.ip）輸出到控制台。
*/
app.use((req,res,next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next() 
  //Remember to call next() when you are done, or your server will be stuck forever.
})


/*#3
Express應用程式的路由設定。當應用程式接收到根目錄（"/"）的GET請求時，它會回傳伺服器上"/views/index.html"這個檔案的內容
*/
app.get('/',(req,res) => {
  res.sendFile(__dirname + "/views/index.html");
})

/*#5
Express應用程式的路由設定。當應用程式接收到路徑為"/json"的GET請求時，它會回傳一個JSON格式的回應

app.get('/json',(req,res) => {
  res.json({"message":"Hello json"})
})
*/
  
//#6
app.get("/json",(req,res) => {
  if (process.env["MESSAGE_STYLE"] == "uppercase"){
    res.json({"message":"HELLO JSON"})
  } else {
  res.json({"message":"Hello json"})
  }
})

/*#8
網址後+/now會出現current time
*/
app.get("/now",(req,res,next) => {
  req.time = new Date().toString();
  next();
}, (req,res) => {
  res.json({"time": req.time})
})

/*#9
如果使用者訪問 your-app-rootpath/hello/echo，伺服器會回應 {"echo":"hello"}
*/
app.get("/:word/echo", (req,res) => {
  res.json({echo: req.params.word})
})

/*#10
如果使用者訪問 your-app-rootpath/name?first=John&last=Doe，伺服器會回應 {"name":"John Doe"}
*/
app.get("/name",(req,res) => {
  res.json({ name: req.query.first + " " + req.query.last })
})
