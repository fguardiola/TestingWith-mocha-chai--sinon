var hex2rgb=require("../lib/hex2rgb");//our isolated function to be tested
var expect=require("chai").expect;//library to do assertions

describe("hex2rgb",function(){
	it("should return an error if the value is not a hex code",function(done){
 		
 			hex2rgb("blue",function(error,result){
 				expect(error).to.exist;
 				done();
 			});
 		
	});

	it("should return a correctly converted rgb value",function(done){
		//call function with a correct hex
		var rgb=hex2rgb("#fff",function(error,result){
           //different sintax. Problem when checking errors and undefined objects with should
			//error.should.not.exist; Does not work cause error is null
			expect(error).to.not.exist;
			expect(result).to.deep.equal([255,255,255]);
			done();
		});	

	});

	it("should return rgb if passed an rgb value ")//if you do not put the callback function is gonna be shown as pending. Its not asserting anything
	//skip a test or group of tests(imagine they are failing)-> Use skip in the it function or describe
	it.skip("should skip this test and put it in pending ",function(){
		console.log("Tested skipped");
		assert.strictEqual(true,false);
	})
});