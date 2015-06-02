var hex2rgb=require("../lib/hex2rgb");//our isolated function to be tested
var assert=require("assert");//library to do assertions

describe("hex2rgb",function(){
	it("should throw an error if the value is not a hex code",function(){
 		assert.throws(function(){
 			hex2rgb("blue");
 		},/Invalid hexadecimal string/);//we need to pass aparameter need to have anonymous function to run thge function we are testing inside 
	});

	it("should return a correctly converted rgb value",function(){
		//call function with a correct hex
		var rgb=hex2rgb("#fff");
		assert.deepEqual(rgb,[255,255,255]);
	});
});