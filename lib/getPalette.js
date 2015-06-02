function getData(){
	//return ["#dddddd","#ff55ff","#75d709"];
	return "Hello"
}

module.exports=function (){
	var palette=getData();
	if(!Array.isArray(palette)){
		throw new Error("Palette is not an array");
	}
};