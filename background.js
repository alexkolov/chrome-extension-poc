const mode = 'cheap' // 'expensive' 'neutral'

function onInstalledHandler() {
  console.log('in background onInstalledHandler')
  // chrome.storage.sync.set({ mode })
}

chrome.runtime.onInstalled.addListener(onInstalledHandler)
