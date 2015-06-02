var hex2rgb=require("../lib/hex2rgb");//our isolated function to be tested
var assert=require("assert");//library to do assertions

describe("hex2rgb",function(){
	it("should return an error if the value is not a hex code",function(done){
 		
 			hex2rgb("blue",function(error,result){
 				assert(error);
 				done();
 			});
 		
	});

	it("should return a correctly converted rgb value",function(done){
		//call function with a correct hex
		var rgb=hex2rgb("#fff",function(error,result){
			assert.strictEqual(error,null);
			assert.deepEqual(result,[255,255,255]);//if you are comparing arrays or objects use deepEqual instead of equal
			done();
		});
		

	});
});