
const add = str => {

	if (str === "") return 0;
	//if delimiter is new line or comma
	let delimiter = new RegExp (',|\n');
	//if custom delimiter, str looks like '//[delimiter]\n[numbers]'
	let searchForDelimiter = str.match(/^\/\/(.*)\n/);	// null || ['//[delimiter]\n', '[delimiter]']
	if (searchForDelimiter){ 

		delimiter = searchForDelimiter[1];
		toCut = searchForDelimiter[0].length;
		str = str.slice(toCut); // str without trash
	}

	if (delimiter.length > 1) {delimiter = getDelimiters(delimiter)};

	//if nums are negative
	let strArr = str.split(delimiter); 
	//array of negative nums
	let negatives = [];

	let nums = strArr.map(str => {
		//check if negative
		if(str.search(/-/) !== -1){
			negatives.push(str);
		}

		if(str > 1000) str = 0;

		return parseInt(str)

	})

	if (negatives.length > 0){
		 return new Error ('negatives not allowed: '+negatives.join(', '));
	}



	return nums.reduce((a,b) => a + b);
}

module.exports = add;

function getDelimiters(s){
	let delims = [];
	while(s.length > 0){
		let reg = new RegExp ('^('+s.charAt(0)+'*)');
		let delim = s.match(reg)[1];
		delims.push(delim);
		s = s.slice(delim.length);
	}
	return new RegExp(delims.join('|'));
}