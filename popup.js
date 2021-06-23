function fix() {
  chrome.storage.sync.get('mode', ({ mode }) => {
    const map = {
      clean: {
        '30 Tage gratis testen': '30 Jahre gratis testen',
        'Ein Jahr gratis testen': 'Zwei Jahre gratis testen',
        'Ab 39,95 €/Monat': 'für immer kostenlos',
        'Bürgerinnen und Bürger': 'Bürger',
        'Pflegende': 'Pfleger',
        'Rentnerinnen und Rentner': 'Rentner',
        'Bundeskanzlerin': 'Bundeskanzler',
      }
    }[mode]

    let html = document.body.innerHTML

    for (const [key, value] of Object.entries(map)) {
      html = html.replaceAll(key, value)
    }

    document.body.innerHTML = html
  })
}

async function onExecuteHandler() {
  const opts = { active: true, currentWindow: true }
  const [tab] = await chrome.tabs.query(opts)

  const script = {
    target: { tabId: tab.id },
    function: fix,
  }

  chrome.scripting.executeScript(script)
}

executeButton.addEventListener('click', onExecuteHandler)
