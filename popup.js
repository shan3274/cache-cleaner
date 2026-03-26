document.addEventListener('DOMContentLoaded', () => {
  const cleanBtn = document.getElementById("cleanBtn");
  const clearAllBtn = document.getElementById("clearAllBtn");
  
  cleanBtn.addEventListener("click", () => {
    cleanBtn.disabled = true;
    cleanBtn.textContent = "Cleaning...";
    chrome.runtime.sendMessage({ action: "cleanDomain" }, () => {
      setTimeout(() => {
        window.close();
      }, 500);
    });
  });

  clearAllBtn.addEventListener("click", () => {
    clearAllBtn.disabled = true;
    clearAllBtn.textContent = "Cleaning Cache...";
    chrome.runtime.sendMessage({ action: "cleanAllCache" }, () => {
      setTimeout(() => {
        window.close();
      }, 500);
    });
  });
});
