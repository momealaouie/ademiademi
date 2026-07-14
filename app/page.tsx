import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { ArrowDown, ArrowUpRight } from "@/components/Icons";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/products";
import { processSteps, services, siteConfig } from "@/lib/site";

const galleryItems = [
  {
    src: "/images/labeling.webp",
    alt: "Etiketterade chokladtryfflar i transparenta påsar",
    label: "Etikettering",
    className: "work-card work-card--wide",
    sizes: "(max-width: 760px) 100vw, 65vw",
  },
  {
    src: "/images/gift-box.webp",
    alt: "Presentask med flera sorters konfektyr",
    label: "Specialpaketering",
    className: "work-card work-card--square",
    sizes: "(max-width: 760px) 100vw, 35vw",
  },
  {
    src: "/images/gift-wrap.webp",
    alt: "Monterat och inslaget presentpaket",
    label: "Montering",
    className: "work-card work-card--portrait",
    sizes: "(max-width: 760px) 100vw, 35vw",
  },
  {
    src: "/images/jelly-bag.webp",
    alt: "Paketerad gelékonfektyr i transparent påse",
    label: "Paketering",
    className: "work-card work-card--tall",
    sizes: "(max-width: 760px) 100vw, 32vw",
  },
  {
    src: "/images/chocolate-bag.webp",
    alt: "Paketerade chokladkulor i transparent påse",
    label: "Ompackning",
    className: "work-card work-card--tall",
    sizes: "(max-width: 760px) 100vw, 32vw",
  },
] as const;

const featuredProducts = [products[0], products[9], products[13], products[20]];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/images/production.webp`,
  email: siteConfig.email,
  telephone: "+46736528934",
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Diabasgatan 15",
    postalCode: "254 68",
    addressLocality: "Helsingborg",
    addressCountry: "SE",
  },
  sameAs: [siteConfig.instagramUrl],
  areaServed: { "@type": "Country", name: "Sweden" },
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#innehall">
        Hoppa till innehållet
      </a>
      <Header />
      <main id="innehall">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero__content page-shell">
            <div className="hero__copy">
              <p className="eyebrow hero__eyebrow">Paketering · Distribution · Logistik</p>
              <h1 id="hero-title">
                <span>Paketerat.</span>
                <span>Monterat.</span>
                <span>Klart.</span>
              </h1>
              <div className="hero__intro">
                <p>
                  Vi tar hand om paketering, transport och logistik. Produkter
                  hämtas från Balkan, transporteras till Sverige och kan levereras
                  vidare till kunder i hela landet.
                </p>
                <div className="button-row">
                  <a
                    className="button button--dark"
                    href="#kontaktformular"
                  >
                    Berätta om ert uppdrag
                    <ArrowUpRight />
                  </a>
                  <a className="text-link" href="#tjanster">
                    Se våra tjänster
                    <ArrowDown />
                  </a>
                </div>
              </div>
            </div>

            <figure className="hero__visual">
              <Image
                src="/images/production.webp"
                alt="Färdigpackade konfektyrhinkar redo för leverans"
                fill
                priority
                quality={88}
                sizes="(max-width: 900px) 100vw, 48vw"
              />
              <figcaption>
                <span>Verkliga uppdrag</span>
                <span>Helsingborg, SE</span>
              </figcaption>
            </figure>
          </div>

          <div className="trust-bar" aria-label="Våra ledord">
            <div className="page-shell trust-bar__inner">
              <span>Flexibla upplägg</span>
              <span>Noggrant utförande</span>
              <span>Leverans i hela Sverige</span>
            </div>
          </div>
        </section>

        <section className="services section-dark" id="tjanster" aria-labelledby="services-title">
          <div className="page-shell">
            <Reveal className="section-heading section-heading--light">
              <p className="eyebrow">01 / Våra tjänster</p>
              <h2 id="services-title">
                Från paketering till transport och leverans.
              </h2>
            </Reveal>

            <div className="service-list">
              {services.map((service, index) => (
                <Reveal className="service-row" delay={index * 70} key={service.number}>
                  <span className="service-row__number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <div className="service-row__body">
                    <p>{service.text}</p>
                    <span>{service.detail}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="work section-space" id="arbeten" aria-labelledby="work-title">
          <div className="page-shell">
            <Reveal className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">02 / I praktiken</p>
                <h2 id="work-title">Från lösa delar till leveransklart.</h2>
              </div>
              <p>
                Varje uppdrag ser olika ut. Därför anpassar vi arbetsflöde,
                bemanning och kontroll efter just er produkt och volym.
              </p>
            </Reveal>

            <div className="work-grid">
              {galleryItems.map((item, index) => (
                <Reveal className={item.className} delay={(index % 2) * 80} key={item.src}>
                  <figure>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      quality={84}
                      sizes={item.sizes}
                    />
                    <figcaption>
                      <span>{item.label}</span>
                      <span>0{index + 1}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="featured-products section-space" id="produkter" aria-labelledby="featured-products-title">
          <div className="page-shell">
            <Reveal className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">03 / Produkter</p>
                <h2 id="featured-products-title">Smaker från Balkan.</h2>
              </div>
              <p>
                Vi distribuerar över 300 produkter på den skandinaviska marknaden.
                Här är ett litet urval ur sortimentet.
              </p>
            </Reveal>

            <div className="featured-products__grid">
              {featuredProducts.map((product, index) => (
                <Reveal className="featured-product" delay={index * 60} key={product.image}>
                  <div className="featured-product__image">
                    <Image
                      src={product.image}
                      alt={`${product.brand} ${product.name}`}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                    />
                  </div>
                  <p>{product.brand}</p>
                  <h3>{product.name}</h3>
                </Reveal>
              ))}
            </div>

            <a className="button button--dark featured-products__link" href="/produkter">
              Se alla produkter
              <ArrowUpRight />
            </a>
          </div>
        </section>

        <section className="process section-space" id="process" aria-labelledby="process-title">
          <div className="page-shell">
            <Reveal className="section-heading section-heading--split process__heading">
              <div>
                <p className="eyebrow">04 / Så arbetar vi</p>
                <h2 id="process-title">Tydligt från start till mål.</h2>
              </div>
              <p>
                En enkel process ger färre frågetecken, jämnare kvalitet och en
                leverans ni kan planera efter.
              </p>
            </Reveal>

            <div className="process-grid">
              {processSteps.map((step, index) => (
                <Reveal className="process-card" delay={index * 90} key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="about" id="om-oss" aria-labelledby="about-title">
          <div className="about__image">
            <Image
              src="/images/gift-box.webp"
              alt="Färdigställd presentförpackning med konfektyr"
              fill
              quality={86}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="about__content">
            <Reveal>
              <p className="eyebrow">05 / Om oss</p>
              <h2 id="about-title">En flexibel partner i Helsingborg.</h2>
              <p className="about__lead">
                Ademi AB grundades i Helsingborg 2010 och har sedan dess
                vuxit från paketering av livsmedel till distribution av produkter
                från Balkan.
              </p>
              <p>
                I dag är vi distributör av produkter från Balkan till kunder i
                hela Skandinavien. Sortimentet omfattar över 300 produkter och vi
                kombinerar hög kvalitet med konkurrenskraftiga priser. Vi hämtar
                varor från Balkan, ansvarar för transporten till Sverige och kan
                leverera till företag och återförsäljare i hela landet. Med lokal
                förankring i Helsingborg arbetar vi för att vara en trygg och
                flexibel partner på den skandinaviska marknaden.
              </p>
              <a className="text-link text-link--line" href="#kontakt">
                Starta en dialog
                <ArrowUpRight />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="contact section-dark" id="kontakt" aria-labelledby="contact-title">
          <div className="page-shell contact__inner">
            <Reveal className="contact__heading">
              <p className="eyebrow">06 / Kontakt</p>
              <h2 id="contact-title">Har ni ett uppdrag på gång?</h2>
              <p>
                Beskriv produkten, ungefärlig volym och önskad tidsplan. Vi
                återkommer med ett upplägg som passar er verksamhet.
              </p>
            </Reveal>

            <ContactForm />

            <div className="contact-grid">
              <div>
                <span>Ring oss</span>
                <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
              </div>
              <div>
                <span>Mejla oss</span>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
              <div>
                <span>Besök oss</span>
                <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
                  {siteConfig.address}
                  <ArrowUpRight />
                </a>
              </div>
              <div>
                <span>Följ oss</span>
                <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
                  {siteConfig.instagramHandle}
                  <ArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="location" id="hitta-hit" aria-labelledby="location-title">
          <div className="location__heading page-shell">
            <Reveal>
              <p className="eyebrow">07 / Hitta hit</p>
              <h2 id="location-title">Diabasgatan 15</h2>
              <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
                Öppna i Google Maps
                <ArrowUpRight />
              </a>
            </Reveal>
          </div>
          <div className="location__map">
            <iframe
              allowFullScreen
              aria-label={`Google Maps som visar ${siteConfig.address}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={siteConfig.mapsEmbedUrl}
              title={`Karta till ${siteConfig.address}`}
            />
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
