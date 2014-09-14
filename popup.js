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
		var filetype = scheduled[objects].url.split('.')[scheduled[objects].url.split('.').length - 1];
		var icon = scheduled[objects].icon;
		var time = scheduled[objects].time;
		var img = document.createElement('img');
		var span = document.createElement('span');
		schedulediv.appendChild(img);
		schedulediv.appendChild(span);
		img.className = 'icon';
		img.src = icon;
		span.className = 'listing';
		if (file.length > 28) {
			span.innerHTML = file.substr(0, 25) + '... .' + filetype;
		} else{
			span.innerHTML = file;
		};
		var hr = document.createElement('hr');
		schedulediv.appendChild(hr);
	};
	document.getElementById('downloadAll').className = '';
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
		testDowload();
	});
	document.getElementById('downloadAll').addEventListener('click', function() {
		downloadAll();
	});
}

function testDowload() {
	notify('info','Downloading testfile from GitHub');
	download(testFile);
	//notify('success','Testfile successfully downloaded');
}

function downloadAll() {
	for (var objects in scheduled) {
		var file = scheduled[objects].url;
		download(file);
	};
}

function notify(type, message) { // Notification types are 'warn, info, success'
	note.className = type;
	note.innerHTML = message;
}

function clearNotify() {
	note.className = 'hidden';
}