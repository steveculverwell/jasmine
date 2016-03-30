describe("The Calculator", function(){
	
	beforeEach(function(){
		Calculator.current = 0;
	});

	describe("When adding", function(){
	
		it("should store the current value at all times", function(){
			expect(Calculator.current).toBeDefined();
			expect(Calculator.current).toEqual(0);
		});

		it("should add numbers", function(){
			expect(Calculator.add(5)).toEqual(5);
			expect(Calculator.add(5)).toEqual(10);
		});

		it("should add any number of numbers", function(){
			expect(Calculator.add(1,2,3)).toEqual(6);
			expect(Calculator.add(1,2,3,4)).toEqual(16);
		});

	});

	describe("When subtracting", function(){
		it("should subtract any number of numbers", function(){
			expect(Calculator.subtract(5)).toEqual(-5);
		});
	});

	describe("When hitting clear", function(){
		it("should reset the current value", function(){
			Calculator.current = 20;
			Calculator.reset()
			expect(Calculator.current).toEqual(0);
		});
	});

})