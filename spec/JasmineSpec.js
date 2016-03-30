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






















































