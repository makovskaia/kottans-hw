function Spy(target, method){

	let originalMethod = target[method]
	let spyCounter = {
		count: 0
	}

	target[method] = function(){
		spyCounter.count++;
		originalMethod.apply(target, arguments);
	}
	return spyCounter
}