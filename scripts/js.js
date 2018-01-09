jQuery(document).ready(function() {

	container = $('.container');
	cover = $('.cover');
	play = $('#play');
	pause = $('#pause');
	mute = $('#mute');
	muted = $('#muted');
	close = $('#close');
	song = new Audio(BigPoppa.mp3','music/Boysinthehood.mp3','music/FirstDayOut.mp3','music/Horses.mp3','music/Igetthebag.mp3','music/MotorSport.mp3','music/Noeffort.mp3','music/colt45.mp3','music/dopeman.mp3','music/feelitstill.mp3','music/fromthedtothea.mp3','music/golddigger.mp3','music/havana.mp3','music/hypnotize.mp3','music/iguessillsmoke.mp3','music/rockstar.mp3','music/slippery.mp3','music/straightouttacompton.mp3','music/thunder.mp3');
	duration = song.duration;

	if (song.canPlayType('audio/mpeg;')) {
    	song.type= 'audio/mpeg';
    	song.src= 'music/bigpoppa.mp3';
	} else {
    	song.type= 'audio/ogg';
    	song.src= 'music/track1.ogg';
	}



	play.live('click', function(e) {
		e.preventDefault();
		song.play();

		$(this).replaceWith('<a class="button gradient" id="pause" href="" title=""></a>');
		container.addClass('containerLarge');
		cover.addClass('coverLarge');
		$('#close').fadeIn(300);
		$('#seek').attr('max',song.duration);
	});

	pause.live('click', function(e) {
		e.preventDefault();
		song.pause();
		$(this).replaceWith('<a class="button gradient" id="play" href="" title=""></a>');

	});

	mute.live('click', function(e) {
		e.preventDefault();
		song.volume = 0;
		$(this).replaceWith('<a class="button gradient" id="muted" href="" title=""></a>');

	});

	muted.live('click', function(e) {
		e.preventDefault();
		song.volume = 1;
		$(this).replaceWith('<a class="button gradient" id="mute" href="" title=""></a>');

	});

	$('#close').click(function(e) {
		e.preventDefault();
		container.removeClass('containerLarge');
		cover.removeClass('coverLarge');
		song.pause();
		song.currentTime = 0;
		$('#pause').replaceWith('<a class="button gradient" id="play" href="" title=""></a>');
		$('#close').fadeOut(300);
	});



	$("#seek").bind("change", function() {
		song.currentTime = $(this).val();
		$("#seek").attr("max", song.duration);
	});

	song.addEventListener('timeupdate',function (){
		curtime = parseInt(song.currentTime, 10);
	$("#seek").attr("value", curtime);
	});









	
	
});
