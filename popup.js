var background = chrome.extension.getBackgroundPage();
var scheduled = background.scheduled;

function generateScheduledDiv() {
	for (var objects in scheduled) {
		var file = scheduled[objects].url.split('/')[scheduled[0].url.split('/').length -1]
		var icon = scheduled[objects].icon
		var time = scheduled[objects].time
		var div = document.createElement('div');
		div.innerHTML = file;
		div.className = 'listing';
		document.getElementById('scheduled').appendChild(div);
	};
}

window.onload = function() {
	console.log('test')
	generateScheduledDiv();
}