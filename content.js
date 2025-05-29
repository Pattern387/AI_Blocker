const blockedKeywords = ["ai", "gpt", "openai", "stablediffusion", "chatgpt", "deepfake"];
const domain = window.location.hostname.toLowerCase();

if (blockedKeywords.some(keyword => domain.includes(keyword))) {
    alert("AI-related website detected. Closing tab...");
    chrome.runtime.sendMessage({ action: "closeTab" });
}
