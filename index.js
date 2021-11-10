const express= require("express");
const app = express();
app.get("/",(req, resp)=>{
resp.send("app is working...")
});

app.listen(5000);