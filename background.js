chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "purgeAllData") {
    // These are all the types of data that can be removed
    const dataToRemove = {
      appcache: true,
      cache: true,
      cacheStorage: true,
      cookies: true,
      downloads: true,
      fileSystems: true,
      formData: true,
      history: true,
      indexedDB: true,
      localStorage: true,
      passwords: true,
      serviceWorkers: true,
      webSQL: true
    };

    // 'since: 0' means everything from the beginning of time
    chrome.browsingData.remove({
      since: 0
    }, dataToRemove, function() {
      console.log("Successfully purged all browser data.");
      sendResponse({ status: "success" });
    });

    // Return true to indicate we will respond asynchronously
    return true;
  }
});
