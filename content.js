const aiKeywords = [
  // Large Language Models
  "chatgpt", "gpt-3", "gpt-4", "gpt", "openai", "claude", "bard", "gemini",

  // Image & video generation
  "stablediffusion", "midjourney", "runwayml", "deepfake",

  // Code generation
  "copilot", "tabnine",

  // Companies & platforms
  "anthropic", "huggingface", "replicate", "perplexity.ai", "mistral.ai", "cohere",

  // Direct term
  "generative ai", "text generation", "image generation", "ai-generated"
];


const allowList = ["mail.google.com", "outlook.com", "github.com"];

function shouldScan() {
  const domain = window.location.hostname;
  return !allowList.some(d => domain.includes(d));
}

function mentionsAI() {
  const text = document.body?.innerText?.toLowerCase() || "";
  return aiKeywords.some(keyword => text.includes(keyword));
}

setTimeout(() => {
  if (shouldScan() && mentionsAI()) {
    alert("AI-related content detected. Closing tab...");
    chrome.runtime.sendMessage({ action: "closeTab" });
  }
}, 1500);
