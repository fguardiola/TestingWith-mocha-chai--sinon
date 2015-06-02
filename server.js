var express=require("express");
var app=express();
var getPalette=require("./lib/getPalette");


app.set('view engine','jade');



app.get("/",function(req,res){
	res.render("index",{palette:getPalette()});
});

app.listen(84);



/*wraprun only some tests */

//mocha -g hex (only hex2rgb tests)
//mocha -R list -g hex

/*as soon one test fail you wanna stop */
//mocha -b

/*keep watching tests. If yo modifie something it reruns the tests again*/
//mocha -w

