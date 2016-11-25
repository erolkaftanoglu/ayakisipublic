function ajaxContact(theForm) {
var $ = jQuery;
$('#loader').fadeIn();
var formData = $(theForm).serialize(),
note = $('#Note');
$.ajax({
type: "POST",
url: '"https://submit.jotformeu.com/submit/62972453644362/"',

data: formData,
success: function(data,response) {
	console.log(data);
if ( note.height() ) {
note.fadeIn('fast', function() { $(this).hide(); });
} else {
note.hide();
}
$('#LoadingGraphic').fadeOut('fast', function() {
if (response === 'success') {

	$('.page_subtitle').hide();

}
// Message Sent? Show the 'Thank You' message and hide the form
var result = '';
var c = '';
if (response === 'success') {
	myApp.alert('Thank you for getting in touch.', 'Message sent!');
	c = 'success';
} else {
	result = response;
	c = 'error';
}
note.removeClass('success').removeClass('error').text('');
var i = setInterval(function() {
	if ( !note.is(':visible') ) {
		note.html(result).addClass(c).slideDown('fast');
		clearInterval(i);
	}
}, 40);
}); // end loading image fadeOut
}
});
return false;
}
