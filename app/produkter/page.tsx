import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";
import { Header } from "@/components/Header";
import { products } from "@/lib/products";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Produkter",
  description:
    "Upptäck ett urval av drycker, chips och inlagda produkter som distribueras av AB Ademi & Ademi.",
  alternates: { canonical: "/produkter" },
};

const groups = [
  { category: "Dryck", eyebrow: "Frutti", title: "Fruktdrycker" },
  { category: "Chips", eyebrow: "Vipa", title: "Chips" },
  { category: "Inlagt", eyebrow: "Bora Agro", title: "Inlagda grönsaker" },
] as const;

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className={styles.main} id="top">
        <section className={styles.hero} aria-labelledby="products-title">
          <div className="page-shell">
            <p className="eyebrow">Vårt sortiment</p>
            <h1 id="products-title">Produkter från Balkan.</h1>
            <p className={styles.intro}>
              Ett urval av drycker, snacks och inlagda produkter som vi
              distribuerar till kunder på den skandinaviska marknaden.
            </p>
          </div>
        </section>

        {groups.map((group, groupIndex) => {
          const groupProducts = products.filter(
            (product) => product.category === group.category,
          );

          return (
            <section className={styles.productSection} key={group.category}>
              <div className="page-shell">
                <div className={styles.heading}>
                  <p className="eyebrow">
                    0{groupIndex + 1} / {group.eyebrow}
                  </p>
                  <h2>{group.title}</h2>
                </div>

                <div className={styles.grid}>
                  {groupProducts.map((product) => (
                    <article className={styles.card} key={product.image}>
                      <div className={styles.imageWrap}>
                        <Image
                          src={product.image}
                          alt={`${product.brand} ${product.name}`}
                          fill
                          sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 25vw"
                        />
                      </div>
                      <div className={styles.cardCopy}>
                        <p>{product.brand}</p>
                        <h3>{product.name}</h3>
                        <span>{product.category}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className={styles.contact}>
          <div className="page-shell">
            <div>
              <p className="eyebrow">För återförsäljare</p>
              <h2>Intresserad av vårt sortiment?</h2>
            </div>
            <Link className="button button--dark" href="/#kontaktformular">
              Kontakta oss
              <ArrowUpRight />
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="page-shell footer__inner">
          <Link className="footer__brand" href="/">
            ADEMI <span>&</span> ADEMI
          </Link>
          <p>Över 300 produkter för den skandinaviska marknaden</p>
          <p>© {new Date().getFullYear()} AB Ademi & Ademi</p>
        </div>
      </footer>
    </>
  );
}
