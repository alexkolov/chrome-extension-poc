function fix(mode) {
  const map = getMap(mode)

  let html = document.body.innerHTML

  for (const [key, value] of Object.entries(map)) {
    html = html.replaceAll(key, value)
  }

  document.body.innerHTML = html
}

function onTabInit() {
  chrome.storage.sync.get('mode', ({ mode }) => {
    fix(mode)
  })
}

onTabInit()
