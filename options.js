// Saves options to chrome.storage
const saveOptions = () => {
  const port = document.getElementById('port').value;

  chrome.storage.sync.set({ port });
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get('port', items => {
    console.log(items);
    document.getElementById('port').value = items.port ?? '3000';
  });
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
