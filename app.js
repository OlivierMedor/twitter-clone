$(document).ready(function(){
	$('#tweet-submit').hide();
	$('#char-count').hide();
	$('.tweet-compose').on('click', function() {
		$('#tweet-submit').show();
		$('#char-count').show();
		$('.tweet-compose').css('height', '5em');


	});

		 $('.tweet-compose').on('keydown', function() {
			var newCounterCharCount = 140;
			var text = $(".tweet-compose").val()
			$('#char-count').text(newCounterCharCount - text.length);
			if(text.length > 129) {
				$('#char-count').css('color', 'red');
			}
			if(text.length < 130) {
				$('#char-count').css('color', '#999');
			}
			if(text.length > 140) {
				$('#tweet-submit').hide();

			}
			if(text.length < 140) {
				$('#tweet-submit').show();
			}


		});
	























});