import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Samarbetspartners",
  description:
    "Varumärken och samarbetspartners till AB Ademi & Ademi i Helsingborg.",
  alternates: { canonical: "/samarbetspartners" },
};

const partners = [
  {
    name: "Frutti",
    category: "Drycker",
    text: "Fruktdrycker för den skandinaviska marknaden.",
  },
  {
    name: "Vipa",
    category: "Snacks",
    text: "Chips och snacks för distribution och butik.",
  },
  {
    name: "Somborka",
    category: "Balkanprodukter",
    text: "Inlagda produkter med rötter i Balkanregionen.",
  },
] as const;

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main className={styles.main} id="top">
        <section className={styles.hero} aria-labelledby="partners-title">
          <div className="page-shell">
            <p className="eyebrow">Samarbetspartners</p>
            <h1 id="partners-title">Varumärken vi samarbetar med.</h1>
            <p className={styles.intro}>
              Genom långsiktiga relationer med utvalda varumärken kan vi erbjuda
              paketering, hantering och distribution som fungerar i praktiken.
            </p>
            <Link className="button button--dark" href="/#kontaktformular">
              Kontakta oss om samarbete
              <ArrowUpRight />
            </Link>
          </div>
        </section>

        <section className={styles.list} aria-labelledby="partner-list-title">
          <div className="page-shell">
            <div className={styles.heading}>
              <p className="eyebrow">Utvalda varumärken</p>
              <h2 id="partner-list-title">Ett urval av våra samarbeten.</h2>
            </div>

            <div className={styles.partnerGrid}>
              {partners.map((partner, index) => (
                <article className={styles.partner} key={partner.name}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{partner.name}</h3>
                    <p className={styles.category}>{partner.category}</p>
                    <p>{partner.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <div className="page-shell">
            <p>Vill du bli samarbetspartner?</p>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="page-shell footer__inner">
          <Link className="footer__brand" href="/">
            ADEMI <span>&</span> ADEMI
          </Link>
          <p>Paketering · Montering · Etikettering</p>
          <p>© {new Date().getFullYear()} AB Ademi & Ademi</p>
        </div>
      </footer>
    </>
  );
}
