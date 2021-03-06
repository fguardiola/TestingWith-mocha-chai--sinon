var hex2rgb=require("../lib/hex2rgb");//our isolated function to be tested
var expect=require("chai").expect;//library to do assertions
var sinon=require("sinon");

describe.only("hex2rgb",function(){
	describe("convert method",function(){
		
		it("should call parse once",function(done){

			sinon.spy(hex2rgb,"parse");//parse is now a spy

			hex2rgb.convert("#ffffff",function(err,result){
				expect(hex2rgb.parse.calledOnce).to.be.true; //now parse is a spy and it has new properties like calledOnce
				expect(hex2rgb.parse.args[0][0]).to.have.length(6); //we expect the argument passed is an array of 6 elements. 
				//args[0] is an array of the arguments passed to parse the first time was called
				//[0][0] is the first arg the first time
				
				//we have overwritten our parse function. IT,S always a good practice to restore the function we have the spy on
				hex2rgb.parse.restore();
				done();

				
			});
		});

		//we are going to control what parse returns and make sure that what comes back from convert its what parse returns.
		it("should always return the result of parse",function(done){
			sinon.stub(hex2rgb,"parse").returns([0,0,200]);
			hex2rgb.convert("#ffffff",function(err,result){
				expect(result).to.be.deep.equal([0,0,200]);
				hex2rgb.parse.restore();
				done();
			
			});

		});
		// we are going to make sure what is passed to parse is should always be a 6 characters array
		it("should always pass a 6 item array to parse",function(done){
			var mock=sinon.mock(hex2rgb);
			//expectations
			mock.expects("parse").twice().withExactArgs("000000".split(''));//we expect parse get called twice with exctly same args

			hex2rgb.convert("000000",function(error,result){
				hex2rgb.convert("0005",function(error,result){
					mock.verify();
					done();
				});
			});

		});

		it("should return an error if the value is not a hex code",function(done){
	 		
	 			hex2rgb.convert("blue",function(error,result){
	 				expect(error).to.exist;
	 				done();
	 			});
	 		
		});

		it("should return a correctly converted rgb value",function(done){
			//call function with a correct hex
			var rgb=hex2rgb.convert("#fff",function(error,result){
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
});