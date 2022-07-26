var router=require("./router")

var exp=require("express")
var app=exp()

var bodyparser=require("body-parser")

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

router(app)
app.listen(7000);
console.log("Listening to port no 7000")