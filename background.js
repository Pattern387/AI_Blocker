chrome.runtime.onMessage.addListener((msg, sender) => {
    if (msg.action === "closeTab" && sender.tab) {
        chrome.tabs.remove(sender.tab.id);
    }
});
