var testFile = 'https://raw.githubusercontent.com/MaxWofford/schedule-download/master/test.txt'; //Using GitHub to host testfile

// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
	var context = "selection";
	var title = "Schedule download...";
	var id = chrome.contextMenus.create({"title": title, "contexts":[context], "id": "context" + context});	
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {

}

function download(link) {
	if (link.split('/')[link.split('/').length -1] = 'schedule-download.text') {
		//Something test-specific here
	};
	chrome.downloads.download({
		url: link
	});
}

function testDowload() {
	download(testFile);
}