chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "cleanDomain") {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      if (!tabs[0] || !tabs[0].url) {
        console.error("No active tab found or URL missing.");
        return;
      }

      try {
        const url = new URL(tabs[0].url);
        const origin = url.origin;

        // Only clear http/https pages
        if (!origin.startsWith('http')) {
           console.warn("Cannot clean non-http(s) pages.");
           return;
        }

        chrome.browsingData.remove({
          origins: [origin]
        }, {
          cookies: true,
          cache: true,
          localStorage: true
        }, function() {
          console.log(`Successfully cleaned data for ${origin}`);
          chrome.tabs.reload(tabs[0].id);
        });
      } catch (e) {
        console.error("Invalid URL:", tabs[0].url);
      }
    });
  }
});
