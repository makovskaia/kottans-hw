

(function()
{
    "use strict"

    var isEnumerable = {}.propertyIsEnumerable

    Object.defineProperty(Object,'deepAssign',{

		value: function deepAssign(target, sources){

			if (target == null){
				throw new TypeError
			}

			var to = Object(target)

			for (var index = 1; index < arguments.length; index++){
				var from = arguments[index]

				if (from !== Object(from)){
					continue
				}

				Reflect.ownKeys(from).forEach((key) => {
					if (isEnumerable.call(from, key)){
						if (from[key] === Object(from[key])){
							to[key] = Object.deepAssign(to[key]||{}, from[key])
						}else{
								to[key] = from[key]
						}
					}
				})
			}		
		return to
		},
		writable: true,
		configurable: true
	})
})()