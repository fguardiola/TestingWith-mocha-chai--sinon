var fs=require("fs");
function getConfig(path){
	return JSON.parse(fs.readFileSync(path).toString());//buffer convert it into a string and then JSON
}

module.exports=function (configPath){
	//you can pass a path to look for fake data in your files
	configPath=configPath||process.cwd()+"/config.json";
	//console.log("configPath: "+configPath);
	var palette=getConfig(configPath).palette;
	//console.log("Palette: "+palette);
	
	if(!Array.isArray(palette)){
		throw new Error("Palette is not an array");
	}


	return palette;
};