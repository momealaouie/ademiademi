"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "@/components/Icons";
import { siteConfig } from "@/lib/site";
import styles from "./Header.module.css";

const navigation = [
  { href: "#tjanster", label: "Tjänster" },
  { href: "#arbeten", label: "Vårt arbete" },
  { href: "#process", label: "Så arbetar vi" },
  { href: "#om-oss", label: "Om oss" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#top" aria-label="Ademi & Ademi, startsida">
          <span className={styles.logoFrame}>
            <Image
              className={styles.logo}
              src="/images/logo.png"
              alt="Ademi & Ademi logotyp"
              width={150}
              height={150}
              priority
            />
          </span>
          <span className={styles.brandText}>
            <strong>ADEMI & ADEMI</strong>
            <span>HELSINGBORG</span>
          </span>
        </a>

        <nav className={styles.desktopNav} aria-label="Huvudmeny">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className={styles.headerCta}
          href="#kontaktformular"
        >
          Be om offert
          <ArrowUpRight />
        </a>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          className={`${styles.menuButton} ${open ? styles.menuButtonOpen : ""}`}
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span />
          <span />
        </button>
      </div>

      <div
        aria-hidden={!open}
        className={`${styles.mobilePanel} ${open ? styles.mobilePanelOpen : ""}`}
        id="mobile-navigation"
      >
        <nav aria-label="Mobilmeny">
          {navigation.map((item, index) => (
            <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
          <a href="#kontakt" onClick={() => setOpen(false)}>
            <span>05</span>
            Kontakt
          </a>
        </nav>
        <div className={styles.mobileContact}>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
        </div>
      </div>
    </header>
  );
}
