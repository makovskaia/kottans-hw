$(document).ready(function(){
	var radioLabel = $('.radio-label');
	radioLabel.on('click',function(){
		$(this).parent().children().css('border', '0.2px solidshow #939393');
		$(this).parent().children().children('.check-img').hide();
		$(this).css('border', '5px solid #25ae88');
		$(this).children('.check-img').show();
		var elem = $(this).parent().attr('class');
		var className = elem.slice(0, elem.trim().search(' '));
		inputs[className] = true;
		enableButtons();


	})

	$('#full-name').focusout(function(){
		var nameValue = $(this).val();
		if(nameValue.length >= 3 && nameValue.trim().search(/^[a-zA-Z]+$/) != -1){
			showImg($(this).parent().children('img'), true);
			inputs['full-name'] = true;
		}else{
			showImg($(this).parent().children('img'), false);
			inputs['full-name'] = false;		
		}
		// enableButtons();

	})

	$('#email-address').focusout(function(){
		var nameValue = $(this).val();
		if(validateEmail(nameValue)){
			showImg($(this).parent().children('img'), true);
			inputs['email-address'] = true;
		}else{
			showImg($(this).parent().children('img'), false);	
			inputs['email-address'] = false;	
		}
		enableButtons();
	})

	$('#choose-a-password').focusout(function(){
		var nameValue = $(this).val();
		if(nameValue.length >= 6){
			showImg($(this).parent().children('img'), true);
			inputs['choose-a-password'] = true;
		}else{
			showImg($(this).parent().children('img'), false);
			nputs['choose-a-password'] = falsenputs['choose-a-password'] = true;;
		}
		enableButtons();
	})

	$('#card-number').focusout(function(){
		var nameValue = $(this).val();
		if(valid_credit_card(nameValue)){
			showImg($(this).parent().children('img'), true);
			inputs['choose-a-password'] = true;
		}else{
			showImg($(this).parent().children('img'), false);
			inputs['choose-a-password'] = false;
		}

		inputs['card-number'] = true;
		enableButtons();
	});

	$('#expiry-date').focusout(function(){
		inputs['expiry-date'] = true;
		enableButtons();
	})

	$('#code').focusout(function(){
		inputs['code'] = true;
		enableButtons();
	})



	$('#terms-conditions').on('click',function(){
		if ($(this).prop('checked')){
			inputs['terms-conditions'] = true;
		}else{
			inputs['terms-conditions'] = false;
		}
		enableButtons();
	})
})

var inputs = {};

// takes the form field value and returns true on valid number
function valid_credit_card(value) {
  // accept only digits, dashes or spaces
	if (/[^0-9-\s]+/.test(value)) return false;
	
	if (value.length == 0) return false
	// The Luhn Algorithm. It's so pretty.
	var nCheck = 0, nDigit = 0, bEven = false;
	value = value.replace(/\D/g, "");

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven) {
			if ((nDigit *= 2) > 9) nDigit -= 9;
		}

		nCheck += nDigit;
		bEven = !bEven;
	}

	return (nCheck % 10) == 0;
}

var checkInputs = function(){
	if (Object.keys(inputs).length < 10 ) return false;
	for (var key in inputs){
		if(!inputs[key]){
			console.log(inputs[key]);
			return false;
		}
	}
	return true
}

var enableButtons = function(){
	if (checkInputs()){
		$('.place-order-button').prop('disabled', false);
	}
	console.log(checkInputs());
	console.log(inputs);
}

function validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}

var showImg = function (element, success){
	var src;
	if(success){
		src = 'http://image.flaticon.com/icons/svg/148/148767.svg';
	}else{
		src = 'http://image.flaticon.com/icons/svg/148/148766.svg';
	}
	element.attr('src',src);
	element.show();
}