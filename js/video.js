var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

window.addEventListener('load', function() {

	var video = document.getElementById('player1');
	
	video.removeAttribute('autoplay');
	video.loop = false;
  
	// Play button
	document.getElementById('play').addEventListener('click', function() {
	  video.play();
	  document.getElementById('volume').textContent = Math.round(video.volume * 100) + '%';
	});
  
	// Pause button
	document.getElementById('pause').addEventListener('click', function() {
	  video.pause();
	});
  
	// Slow down button
	document.getElementById('slower').addEventListener('click', function() {
	  video.playbackRate -= video.playbackRate * 0.10;
	  console.log('New Speed:', video.playbackRate);
	});
  
	// Speed up button
	document.getElementById('faster').addEventListener('click', function() {
	  video.playbackRate /= 0.90; // Inverse operation of slowing down by 10%
	  console.log('New Speed:', video.playbackRate);
	});
  
	// Skip ahead button
	document.getElementById('skip').addEventListener('click', function() {
	  if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	  } else {
		video.currentTime += 10;
	  }
	  console.log('Current Location:', video.currentTime);
	});
  
	// Mute button
	document.getElementById('mute').addEventListener('click', function() {
	  video.muted = !video.muted;
	  this.textContent = video.muted ? 'Unmute' : 'Mute';
	});
  
	// Volume slider
	document.getElementById('slider').addEventListener('input', function() {
	  video.volume = this.value / 100;
	  document.getElementById('volume').textContent = Math.round(video.volume * 100) + '%';
	});
  
	// Old School button
	document.getElementById('vintage').addEventListener('click', function() {
	  video.classList.add('oldSchool');
	});
  
	// Original button
	document.getElementById('orig').addEventListener('click', function() {
	  video.classList.remove('oldSchool');
	});
  });
  


  

