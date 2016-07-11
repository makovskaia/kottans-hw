$(document).ready(function(){
	var radioLabel = $('.radio-label');
	radioLabel.on('click',function(){
		$(this).parent().children().css('border', '0.2px solid #939393');
		$(this).parent().children().children('.check-img').hide();
		$(this).css('border', '5px solid #25ae88');
		$(this).children('.check-img').show();
	})
	$('#full-name').focusout(function(){
		var nameValue = $(this).val();
		if(nameValue.length >= 3 && nameValue.trim().search(/^[a-zA-Z]+$/) != -1){
			showImg($(this).parent().children('img'), true);
		}else{
			showImg($(this).parent().children('img'), false);		
		}
	})

	$('#email-address').focusout(function(){
		var nameValue = $(this).val();
		if(validateEmail(nameValue)){
			showImg($(this).parent().children('img'), true);
		}else{
			showImg($(this).parent().children('img'), false);		
		}
	})

	$('#choose-a-password').focusout(function(){
		var nameValue = $(this).val();
		if(nameValue.length >= 6){
			showImg($(this).parent().children('img'), true);
		}else{
			showImg($(this).parent().children('img'), false);
		}
	})

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
})