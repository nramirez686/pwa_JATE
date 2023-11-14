const butInstall = document.getElementById("buttonInstall");

// Initialize deferredPrompt as a property of the window object
window.deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  // Show prompt
  promptEvent.prompt();

  // Wait for the user to respond to the prompt
  const choiceResult = await promptEvent.userChoice;

  if (choiceResult.outcome === "accepted") {
    console.log("User accepted the installation");
  } else {
    console.log("User dismissed the installation");
  }

  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;

  // Hide the button after prompt is shown
  butInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", (event) => {
  // Clear prompt
  window.deferredPrompt = null;
});
