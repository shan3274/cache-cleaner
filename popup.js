document.addEventListener('DOMContentLoaded', () => {
  const clearAllBtn = document.getElementById("clearAllBtn");
  
  clearAllBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear ALL browser data? This cannot be undone.")) {
      clearAllBtn.disabled = true;
      clearAllBtn.textContent = "Purging...";
      
      chrome.runtime.sendMessage({ action: "purgeAllData" }, (response) => {
        if (response && response.status === "success") {
          clearAllBtn.textContent = "Done!";
          setTimeout(() => {
            window.close();
          }, 1000);
        } else {
          clearAllBtn.disabled = false;
          clearAllBtn.textContent = "Clear Everything Now";
          alert("Something went wrong. Please try again.");
        }
      });
    }
  });
});
