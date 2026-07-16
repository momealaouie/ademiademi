import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="page-shell footer__inner">
        <Link
          className="footer__brand"
          href="/#top"
          aria-label="Ademi AB, gå högst upp på startsidan"
        >
          <span className="footer__logo">
            <Image src="/images/logo.png" alt="" width={150} height={150} />
          </span>
          <span>Ademi AB</span>
        </Link>

        <div className="footer__columns">
          <nav aria-label="Länkar i sidfot">
            <p>Webbplats</p>
            <Link href="/#tjanster">Tjänster</Link>
            <Link href="/#om-oss">Om oss</Link>
            <Link href="/produkter">Produkter</Link>
            <Link href="/#kontakt">Kontakt</Link>
            <Link href="/#hitta-hit">Var ligger vi</Link>
            <Link href="/privacy-policy">Privacy policy</Link>
          </nav>

          <div>
            <p>Följ oss</p>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>

          <p className="footer__descriptor">
            Paketering · Distribution · Logistik
          </p>
        </div>

        <div className="footer__bottom">
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <p>© {new Date().getFullYear()} Ademi AB</p>
        </div>
      </div>
    </footer>
  );
}
