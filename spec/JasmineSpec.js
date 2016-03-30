describe("Asynchrons specs", function(){

	var value;

  beforeEach(function(done) {
    setTimeout(function() {
      value = 0;
      done();
    }, 1);
  });

 it("should support async execution of test preparation and expectations", function(done) {
    value++;
    expect(value).toBeGreaterThan(0);
    done();
  });

 	describe("long Asynchrons specs", function(){
 		beforeEach(function(done){
 			done();
 		}, 1000);

		it("takes a long time", function(done) {
		      setTimeout(function() {
		        done();
		      }, 9000);
		    }, 10000);

		    afterEach(function(done) {
		      done();
		    }, 1000);
 		
 	});



});







describe("A spy", function(){
	var foo, bar = null;

	beforeEach(function(){
		foo = {
			setBar: function(value){
				bar = value;
			}
		};

		spyOn(foo, 'setBar');
		foo.setBar(123);
		foo.setBar(456, 'another param');		
	});

	it("tracks that the spy was called", function(){
		expect(foo.setBar).toHaveBeenCalled();
	});

	it("tracks all the arguments of it calls", function(){
		expect(foo.setBar).toHaveBeenCalledWith(123);
		expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
	});
});

describe("A spy, when configured to call through", function(){
	var foo, bar, fetchedBar;

	beforeEach(function(){

		foo = {
			setBar: function(value){
				bar = value;
			},
			getBar: function(){
				return bar;
			}
		};

		spyOn(foo, 'getBar').and.callThrough();

		foo.setBar(123);
		fetchedBar = foo.getBar();
	});

	it("tracks that the spy was called", function() {
		expect(foo.getBar).toHaveBeenCalled();
	});
	
	it("should not affect other functions", function() {
		expect(bar).toEqual(123);
	});
  
	it("when called returns the requested value", function() {
		expect(fetchedBar).toEqual(123);
	});

});











describe("A suite", function(){
	it("contains a spec with an exception", function(){
		expect(true).toBe(true);
	});
});

describe("The 'toEqual' Matcher", function(){
	
	it("Works for simple literals and variables", function(){
		var a = 12;
		expect(a).toEqual(12);
	});


	it("Should work for objects", function(){
		var foo = {a: 12, b: 24};
		var bar = {a: 12, b: 24};

		expect(foo).toEqual(bar);
	});

	it("The 'toMatch' matcher is for regular expressions", function(){
		var message = "foo bar baz";

		expect(message).toMatch(/bar/);
		expect(message).toMatch("bar");
		expect(message).not.toMatch(/derp/);

	});

	it("The 'toBeUndefined' matcher compares against 'undefined'", function(){
		var a = {foo:"bar"};

		expect(a.foo).not.toBeUndefined();
		expect(a.bar).toBeUndefined();

	});

	it("The 'toBeNull' matcher compares against null", function(){
		var a = null;
		var foo = "foo";

		expect(null).toBeNull();
		expect(a).toBeNull();
		expect(foo).not.toBeNull();

	})

	it("The 'toBeTruthy' matcher is for boolean casting testing", function(){
		var a, foo = "bar";
		expect(foo).toBeTruthy();
		expect(a).not.toBeTruthy();
	});

	it("The 'toBeFalsy' matcher is for boolean casting testing", function(){
		var a, foo = "bar";
		expect(a).toBeFalsy();
		expect(foo).not.toBeFalsy();
	});

	it("The 'toContain' matcher is for finding an item in an Array", function(){
		var array = ['wig', 'wigford','sp'];

		expect(array).toContain("wig");
		expect(array).not.toContain("silly wig");
	});

	it("The 'toBeLessThan' matcher is for mathematical comparisons", function(){
		var pi = 3.1415926, e = 2.78;
		expect(e).toBeLessThan(pi);
		expect(pi).not.toBeLessThan(e);
	});

	it("The 'toBeGreaterThan' matcher is for mathematical comparisons", function(){
		var pi = 3.1415926, e = 2.78;
		expect(pi).toBeGreaterThan(e);
		expect(e).not.toBeGreaterThan(pi);
	});

	it("The 'toThrow' matcher is for testing if a function throws an exception", function(){
		var foo = function(){return 1 + 2;};
		var bar = function(){return a + 1;};
		expect(foo).not.toThrow();
		expect(bar).toThrow();
	});

	it("The 'toThrowError' matcher is for testing a specific thrown exception", function() {
    	var foo = function() {throw new TypeError("foo bar baz");};
    	expect(foo).toThrowError("foo bar baz");
    	expect(foo).toThrowError(TypeError);
    });

});

describe("A spec using beforeEach and afterEach", function(){
	var foo = 0;

	beforeEach(function(){foo += 1;});
	afterEach(function(){foo = 0;});

	it("Is just a function, so it can contain any code", function(){
		expect(foo).toEqual(1);

	});

	it("Can have more than one exception", function(){
		expect(foo).toEqual(1);
		expect(true).toEqual(true);
	}); 
});


describe("A spec", function(){
	beforeEach(function(){this.foo = 0;});
	
	it("can use 'this' to share state", function(){
		expect(this.foo).toEqual(0);
	});

	it("prevents test pollution by having an empty `this` created for the next spec", function() {
		expect(this.foo).toEqual(0);
		expect(this.bar).toBe(undefined);
	});	

});

describe ("Pending Specs", function(){
	
	xit("can be declared xit", function(){
		expect(true).toBe(false);
	});

	it("can be declared with 'it' but without a function");

});




















































