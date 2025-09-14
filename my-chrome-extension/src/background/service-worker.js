// src/background/service-worker.js
chrome.runtime.onInstalled.addListener(() => {
  console.log('Bootcamp Helper instalado.');
  chrome.storage.local.set({ installs: Date.now() });
  // Example alarm to show alarms usage
  chrome.alarms.create('heartbeat', { periodInMinutes: 60 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'heartbeat') {
    console.log('Heartbeat alarm fired at', new Date().toISOString());
  }
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg && msg.type === 'PING') {
    sendResponse({ ok: true, time: new Date().toISOString() });
  }
  // returning true would indicate async response; we don't need it here
});
