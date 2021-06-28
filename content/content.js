function getMap(mode) {
  return {
    cheap: {
      '30 Tage gratis testen': '30 Jahre gratis testen',
      'Ein Jahr gratis testen': 'Zwei Jahre gratis testen',
      'Ab 39,95 €/Monat': 'für immer kostenlos',
      'SIP Trunk': 'Blink Blink',
      'Mehr erfahren': 'Kostenlos',
    },
    expensive: {
      '30 Tage gratis testen': 'Nichts ist umsonst',
      'Ein Jahr gratis testen': 'Kurz testen, viel bezahlen',
      'Ab 39,95 €/Monat': 'Ab 39,95 €/Minute',
      'SIP Trunk': 'Blink Blink',
      'Mehr erfahren': 'Wird teuer!',
    },
    neutral: {},
  }[mode]
}

function saveOriginal() {
  const original = document.body.innerHTML
  chrome.storage.local.set({ original })
}

function parse(content, map) {
  let result = content
  for (const [key, value] of Object.entries(map)) {
    result = result.replaceAll(key, value)
  }
  return result
}

function change(to) {
  let statusTag = document.getElementById('extention-status')
  console.log('status', statusTag)

  if (!statusTag) {
    statusTag = document.createElement('div')
    statusTag.id = 'extention-status'
    document.body.appendChild(statusTag)
    saveOriginal()
  }

  chrome.storage.local.get('original', ({ original }) => {
    const newContent = parse(original, getMap(to))
    document.body.innerHTML = newContent
  })
}

function onMessage(request, sender, sendResponse) {
  console.log('request', request)
  const { mode, tabId } = request
  change(mode)
  sendResponse({ status: 'success' })
}

chrome.runtime.onMessage.addListener(onMessage)

console.log('onContentInit')
