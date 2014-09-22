var testFile = 'https://raw.githubusercontent.com/MaxWofford/schedule-download/master/schedule-download.txt'; //Using GitHub to host testfile
var scheduled = [];
var history = [];
var link = null;
var icon = null;
var time = null;



// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
	var context = "link";
	var title = "Schedule download...";
	var id = chrome.contextMenus.create({"title": title, "contexts":[context], "id": "context" + context});	
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
	link = info.linkUrl;
	icon = tab.favIconUrl;
	console.info(link);
	console.info(icon);
	var filetype = link.split('/')[link.split('/').length - 1];
	if (filetype.split('.')[filetype.split('.').length - 1].length <= 4) {
		scheduleDownload(link, icon, time);
		console.info('Scheduled to download a(n)', link.split('.')[link.split('.').length - 1], 'type file');
	} else{
		window.alert('This link has no filetype, download aborted');
	};
}

function scheduleDownload(link,icon,time) {
	scheduled.push({num: scheduled.length + 1, url: link, icon: icon, time: time});
}

function download(link) {
	chrome.downloads.download({
		url: link,
	});
}

function callbackCake() {
			//var move = scheduled(0);
			var datetime = "Downloaded on " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
			//history.push({num: history.length + 1, url: move.url, icon: move.icon, time: datetime});
			console.log(datetime);
}