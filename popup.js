document.addEventListener('DOMContentLoaded', () => {
  const cleanBtn = document.getElementById("cleanBtn");
  
  cleanBtn.addEventListener("click", () => {
    // Immediate visual feedback
    cleanBtn.disabled = true;
    cleanBtn.textContent = "Cleaning...";
    
    // Send message to background script
    chrome.runtime.sendMessage({ action: "cleanDomain" }, () => {
      // Small delay to let the user see the "Cleaning..." state
      setTimeout(() => {
        window.close();
      }, 500);
    });
  });
});
