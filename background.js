const mode = 'clean'

function onInstalledHandler() {
  chrome.storage.sync.set({ mode })
}

chrome.runtime.onInstalled.addListener(onInstalledHandler)
