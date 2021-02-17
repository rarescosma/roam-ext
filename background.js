function performExport() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "roam_export_action"});
  });
}

chrome.browserAction.onClicked.addListener(function(tab) {
  performExport();
});

chrome.commands.onCommand.addListener(function(command) {
  if (command === 'perform_export') {
    performExport();
  }
});
