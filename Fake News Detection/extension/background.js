// Background service worker for Chrome extension
// Handles long-running tasks and extension lifecycle

chrome.runtime.onInstalled.addListener(() => {
  console.log('Haloscope extension installed successfully');
});