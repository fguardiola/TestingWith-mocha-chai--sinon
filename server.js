var express=require("express");
var app=express();


app.set('view engine','jade');

app.get("/",function(req,res){
	res.render("index",{palette:["#cc77ff","#ff5512","#75d709"]});
});

app.listen(84);