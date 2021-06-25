function getMap(mode) {
  return {
    clean: {
      '30 Tage gratis testen': '30 Jahre gratis testen',
      'Ein Jahr gratis testen': 'Zwei Jahre gratis testen',
      'Ab 39,95 €/Monat': 'für immer kostenlos',
      'Bürgerinnen und Bürger': 'Bürger',
      Pflegende: 'Pfleger',
      'Rentnerinnen und Rentner': 'Rentner',
      Bundeskanzlerin: 'Bundeskanzler',
      'Die Kanzlerin': 'Der Kanzler',
      'der Kanzlerin': 'des Kanzlers',
      'SIP Trunk': 'Blink Blink',
      'Mehr erfahren': 'Kostenlos',
    },
  }[mode]
}