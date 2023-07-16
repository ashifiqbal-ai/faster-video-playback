chrome.runtime.onMessage.addListener(function(message, sender) {
    chrome.action.setBadgeText({text: message.toString(), tabId: sender.tab.id});
});