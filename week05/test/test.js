"use strict"

require("chai").should()

const add = require("../add")

describe("add", () =>{

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
	it('should handle neew lines and commas as delimiters', () =>{
		add('100\n2,3').should.equal(105);
	})
	it('should throw error if there is no number between new line and comma', () =>{
		add('1,/n').should.be.NaN;
	})
	it('should handle custom delimiters', () =>{
		add('//;\n1;2;3;4').should.equal(10);
	})
	it('shold throw an exception "negatives not allowed" if input is negative string', () =>{
		add('-1,-2,0').should.throw.error;
	})
	it('Numbers bigger than 1000 should be ignored', () =>{
		add('5, 1001').should.equal(5);
	})
	it('should handle delimiter of any length', () =>{
		add('//;;;;\n1;;;;20;;;;3').should.equal(24);
	})
	it('should handle multiple custom delimiters', () =>{
		add('//!@\n1!1@0').should.equal(2);
	})
	it('should handle multiple custom delimiters that are longer than one symbol', () =>{
		add('//!!!@\n1!!!1@0').should.equal(2);
	})

})
