
const add = str => {
	if (str === "") return 0;
	let regexp = new RegExp (/,|\n/);
	// let delimiter = str.
	let nums = str.split(regexp); 
	return nums.map(str => str = parseInt(str))
		       .reduce((a,b) => a + b);
}

module.exports = add;