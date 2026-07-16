export const siteConfig = {
  name: "Ademi AB",
  shortName: "Ademi AB",
  description:
    "Paketering, montering, etikettering och distribution av produkter från Balkan.",
  url: "https://www.ademiademi.com",
  email: "info@ademiademi.com",
  phoneDisplay: "+46 73 652 89 34",
  phoneHref: "tel:+46736528934",
  address: "Diabasgatan 15, 254 68 Helsingborg",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=56.07852406108852%2C12.762200326383114",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=56.07852406108852,12.762200326383114&z=19&output=embed",
  instagramUrl: "https://www.instagram.com/ademiademiab/",
  instagramHandle: "@ademiademiab",
} as const;

export const services = [
  {
    number: "01",
    title: "Paketering & ompackning",
    text: "Vi packar, packar om och färdigställer produkter enligt era instruktioner, kvalitetskrav och tidsramar.",
    detail: "Från enskilda produkter till större volymer.",
  },
  {
    number: "02",
    title: "Montering & kampanjkit",
    text: "Noggrann manuell montering av produkter, komponenter, kit, presentförpackningar och kampanjmaterial.",
    detail: "Flexibelt upplägg efter ert faktiska behov.",
  },
  {
    number: "03",
    title: "Etikettering & sortering",
    text: "Applicering av etiketter, sortering och kontroll så att varorna är redo för nästa steg i leveranskedjan.",
    detail: "Tydliga instruktioner och konsekvent resultat.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Behov & planering",
    text: "Vi går igenom produkt, volym, instruktioner, tidsplan och kvalitetskrav.",
  },
  {
    number: "02",
    title: "Utförande",
    text: "Arbetet genomförs enligt det upplägg vi har kommit överens om.",
  },
  {
    number: "03",
    title: "Kontroll & överlämning",
    text: "Resultatet kontrolleras och färdigställs för avhämtning eller nästa steg.",
  },
] as const;
