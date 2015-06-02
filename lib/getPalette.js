function getData(){
	return ["#dddddd","#ff55ff","#75d709"];
	//return "Hello"
	
}

module.exports=function (fetch){
	var fetch=fetch || getData;// fetch is gonna be the function we pass or the getData if we do not pass any argument

	var palette=fetch();
	//var palette=getData();
	
	if(!Array.isArray(palette)){
		throw new Error("Palette is not an array");
	}

	return palette;
};