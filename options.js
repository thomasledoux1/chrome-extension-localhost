// Saves options to chrome.storage
const saveOptions = () => {
  const port = document.getElementById('port').value;
  const secure = document.getElementById('secure').checked;
  chrome.storage.sync.set({ port, secure });
  window.close();
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = async () => {
  const syncItems = await chrome.storage.sync.get(['port', 'secure']);
  console.log(syncItems);
  document.getElementById('port').value = syncItems.port ?? '3000';
  document.getElementById('secure').checked = syncItems.secure;
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
