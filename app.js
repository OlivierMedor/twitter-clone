$(document).ready(function(){
	$(this).find('.retweets').hide();
	$(this).find('.time').hide();
	$(this).find('.reply').hide();
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
		 $('#tweet-submit').on('click', function() { 
		 	$('#stream').prepend('<div class="tweet">' + 
						'<div class="content">' + 
							'<img class="avatar" src="img/alagoon.jpg" />' + 
							'<strong class="fullname">' + 'alagoon ' + '</strong>' + 
							'<span class="username">' + '@alagoon' + '</span>' + 
							'<p class="tweet-text">' + $(".tweet-compose").val() + '</p>' + 

							'<div class="tweet-actions">' + 						'<ul>' + 
									'<li>' + '<span class="icon action-reply">' + '</span>' + 'Reply' + '</li>' + 
									'<li>' + '<span class="icon action-retweet">' + '</span>' +  'Retweet' + '</li>' +
									'<li>' + '<span class="icon action-favorite">' + '</span>' +  'Favorite' + '</li>' +
									'<li>' + '<span class="icon action-more">' + '</span>' +  'More' + '</li>' +
								'</ul>' +
							'</div>');

		 	
		 })

		   // $('#stream').on('mouseenter', '.tweet', function() {
		   // 	$(this).find('.tweet-actions').hide();
		   // })
		$('#stream').on('click', '.tweet', function() {
			$(this).find('.retweets').show();
			$(this).find('.time').show();
			$(this).find('.reply').show();
		});
	























});