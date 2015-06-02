var getPalette=require("../lib/getPalette");//our isolated function to be tested
var assert=require("assert");//library to do assertions
describe("getPalette",function(){
	
	it("should throw an error if the result is not an array",function(){
		function fetch(){
			return "not array"
		}

		assert.throws(function(){
			getPalette(fetch);
		},/is not an array/);
	});

	it("should return an array with 3 items by default",function(){
		var palette=getPalette();//no parameters so is gonna execute the normal getData function. That way we can pass the two tests
	    
	    assert(Array.isArray(palette),"did not return an array");
	    assert.equal(palette.length,3,"did not return 3 items");
	})
	
});

