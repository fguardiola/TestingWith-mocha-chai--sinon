var getPalette=require("../lib/getPalette");//our isolated function to be tested
var expect=require("chai").expect;

var fakeDataPath=process.cwd()+"/test/fixtures/config-palette-non-array.json";
//console.log("fakeDataPath:"+fakeDataPath);
describe("getPalette",function(){

	it("should throw an error if the result is not an array",function(done){
			/*assert.throws(function(){
				getPalette(fakeDataPath)}
				,/is not an array/);*/
			//different sintax. Problem when checking errors and undefined objects with should
			//should.Throw(function(){getPalette(fakeDataPath)},/is not an array/);

			expect(function(){getPalette(fakeDataPath)}).to.throw(/is not an array/);
			done();
		});
		
	it("should return an array with 3 items by default",function(){
		var palette=getPalette();//no parameters so is gonna execute the normal getData function. That way we can pass the two tests
	    expect(palette).to.be.an("array").with.length(3);
	   
	});
	
});
