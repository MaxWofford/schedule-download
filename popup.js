var background = chrome.extension.getBackgroundPage();
var scheduled = background.scheduled;

function generateScheduledDiv() {
	for (var objects in scheduled) {
		var file = scheduled[objects].url.split('/')[scheduled[0].url.split('/').length -1];
		var icon = scheduled[objects].icon;
		var time = scheduled[objects].time;
		var img = document.createElement('img');
		var div = document.createElement('div');
		document.getElementById('scheduled').appendChild(img);
		document.getElementById('scheduled').appendChild(div);
		img.className = 'icon';
		img.src = icon;
		div.innerHTML = file;
		div.className = 'listing';
	};
}

window.onload = function() {
	generateScheduledDiv();
}