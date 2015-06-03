var getPalette=require("../lib/getPalette");//our isolated function to be tested
var assert=require("assert");//library to do assertions
var fs=require("fs");//file system read and write config file
var configPath=process.cwd()+"/config.json";

describe("getPalette",function(){
	//afect what configuration file contains in order to mock out the data
	function writeConfig(configObj,callback){
		//console.log("Content to overwrite"+JSON.stringify(configObj));
		fs.writeFile(configPath,JSON.stringify(configObj),callback);

	}

	var config={};
	//before it runs any of the tests
	before(function(done){
		fs.readFile(configPath,function(err,result){
			config=JSON.parse(result.toString());
			done();
		})
		
	});
	afterEach(function(done){
		writeConfig(config,done);
	})

	//after each one rewrite the config file back

	it("should throw an error if the result is not an array",function(done){
		writeConfig({palette:"string"},function(err){
			//read the file after writing with data we control
			
			assert.throws(getPalette,/is not an array/);
			done();
		});
		
	});

	it("should return an array with 3 items by default",function(){
		var palette=getPalette();//no parameters so is gonna execute the normal getData function. That way we can pass the two tests
	    
	    assert(Array.isArray(palette),"did not return an array");
	    assert.equal(palette.length,3,"did not return 3 items");
	});
	
});

