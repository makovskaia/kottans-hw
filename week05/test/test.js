"use strict"

require("chai").should()

const add = require("../add")

describe("add", () =>
{
	it("should return 0 for empty string", () =>{
		add("").should.equal(0);
	})

	it("for one number should return the same number ", () =>{
		add('1').should.equal(1);
		add('100').should.equal(100);
	})
	it('for two numbers should return the sum of them', () =>{
		add('1,2').should.equal(3);
	});
	it('should return sum of many numbers', () =>{
		add('1,1,1,1,1,1,1,1,1').should.equal(9);
	});
	it('should handle new lines between numbers', () =>{
		add('1\n2\n3').should.equal(6);
	})
})
