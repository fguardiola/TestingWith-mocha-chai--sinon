var fs=require("fs");
function getConfig(){
	return JSON.parse(fs.readFileSync(process.cwd()+"/config.json").toString());//buffer convert it into a string and then JSON
}

module.exports=function (){
	

	var palette=getConfig().palette;
	console.log("Configuration to test:"+palette);
	
	if(!Array.isArray(palette)){
		throw new Error("Palette is not an array");
	}


	return palette;
};