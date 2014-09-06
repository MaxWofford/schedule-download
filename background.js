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
	chrome.downloads.download({
		url: link,
		filename: "suggested/filename/with/relative.path" // Optional
	});
}