// src/content/content.js
// Simple content script: outline all links and add a small badge to the top-left.
for (const a of document.querySelectorAll('a')) {
  a.style.outline = '2px dashed #ec0089';
  a.style.padding = '2px';
}

// Add a small floating badge to pages matched
const badge = document.createElement('div');
badge.textContent = 'Bootcamp Helper';
badge.style.position = 'fixed';
badge.style.left = '8px';
badge.style.top = '8px';
badge.style.zIndex = 2147483647;
badge.style.background = '#0b63ff';
badge.style.color = 'white';
badge.style.padding = '4px 8px';
badge.style.borderRadius = '6px';
badge.style.fontSize = '12px';
badge.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
document.documentElement.appendChild(badge);
