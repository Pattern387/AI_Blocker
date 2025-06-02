chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.action === "closeTab" && sender.tab?.id) {
    chrome.tabs.remove(sender.tab.id);
  }
});
