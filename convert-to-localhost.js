(async () => {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  const url = new URL(tab.url);
  const port = (await chrome.storage.sync.get('port')).port;
  const secure = (await chrome.storage.sync.get('secure')).secure;
  chrome.tabs.update({
    url: `http${secure ? 's' : ''}://localhost:${port ?? '3000'}${
      url.pathname
    }`,
  });
})();
