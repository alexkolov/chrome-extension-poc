async function onExecuteHandler(mode) {
  const opts = { active: true, currentWindow: true }
  const [tab] = await chrome.tabs.query(opts)

  const script = {
    target: { tabId: tab.id },
    files: ['content/content.js']
  }

  try {
    await chrome.scripting.executeScript(script)

    await chrome.tabs.sendMessage(
      tab.id,
      { tabId: tab.id , mode },
      (response) => {
        // alert(response)
      }
    )
  } catch (error) {
    alert(`Error: ${error}`)
  }
}

cheapButton.addEventListener('click', () => onExecuteHandler('cheap'))
neutralButton.addEventListener('click', () => onExecuteHandler('neutral'))
expensiveButton.addEventListener('click', () => onExecuteHandler('expensive'))
