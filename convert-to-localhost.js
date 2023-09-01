(async () => {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  const url = new URL(tab.url);
  const port = (await chrome.storage.sync.get('port')).port;
  chrome.tabs.update({
    url: `http://localhost:${port ?? '3000'}${url.pathname}`,
  });
})();
