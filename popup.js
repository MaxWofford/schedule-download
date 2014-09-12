var background = chrome.extension.getBackgroundPage();
var scheduled = background.scheduled; 
var schedulediv = null;
var note = null;
function init() {
	schedulediv = document.getElementById('scheduled');
	note = document.getElementById('notify');
}

function generateScheduledDiv() {
	for (var objects in scheduled) {
		var file = scheduled[objects].url.split('/')[scheduled[0].url.split('/').length -1];
		var icon = scheduled[objects].icon;
		var time = scheduled[objects].time;
		var img = document.createElement('img');
		var div = document.createElement('div');
		schedulediv.appendChild(img);
		schedulediv.appendChild(div);
		img.className = 'icon';
		img.src = icon;
		div.innerHTML = file;
		div.className = 'listing';
	};
}

window.onload = function() {
	init();

	if (scheduled[0]) {
		schedulediv.className = '';
		clearNotify();
		generateScheduledDiv();
	} else{
		notify('info', 'No downloads scheduled!');
	};

	note.addEventListener('click', function() {
		clearNotify();
	});
	document.getElementById('testButton').addEventListener('click', function() {
		console.info('clicked');
		testDowload();
	});
}

function testDowload() {
	notify('info','Downloading testfile from GitHub');
	download(testFile);
	notify('success','Testfile successfully downloaded');
}

function notify(type, message) { // Notification types are 'warn, info, success'
	note.className = type;
	note.innerHTML = message;
}

function clearNotify() {
	note.className = 'hidden';
}