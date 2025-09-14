// popup/popup.js
const pingBtn = document.getElementById('ping');
const statusEl = document.getElementById('status');
const openBtn = document.getElementById('open-tab');

pingBtn.addEventListener('click', async () => {
  try {
    const res = await chrome.runtime.sendMessage({ type: 'PING' });
    statusEl.textContent = `Background está vivo: ${res.time}`;
  } catch (err) {
    statusEl.textContent = `Erro: ${err.message}`;
  }
});

openBtn.addEventListener('click', () => {
  chrome.tabs.create({ url: 'https://developer.chrome.com/docs/extensions/mv3/' });
});
