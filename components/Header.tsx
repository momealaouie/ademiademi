"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { ArrowUpRight } from "@/components/Icons";
import { siteConfig } from "@/lib/site";
import styles from "./Header.module.css";

const navigation = [
  { href: "/#tjanster", label: "Tjänster" },
  { href: "/#arbeten", label: "Vårt arbete" },
  { href: "/#process", label: "Så arbetar vi" },
  { href: "/#om-oss", label: "Om oss" },
  { href: "/#hitta-hit", label: "Var ligger vi" },
  { href: "/produkter", label: "Produkter" },
  { href: "/privacy-policy", label: "Privacy policy" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  function handleNavigationClick(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    setOpen(false);

    if (window.location.pathname !== "/" || !href.startsWith("/#")) return;

    const section = document.getElementById(href.slice(2));
    if (!section) return;

    event.preventDefault();
    section.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
    window.history.pushState(null, "", href.slice(1));
  }

  function handleBrandClick(event: MouseEvent<HTMLAnchorElement>) {
    if (window.location.pathname !== "/") return;

    event.preventDefault();
    setOpen(false);
    document.getElementById("top")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", "#top");
  }

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
        <Link
          className={styles.brand}
          href="/#top"
          aria-label="Ademi AB, gå högst upp på startsidan"
          onClick={handleBrandClick}
        >
          <span className={styles.logoFrame}>
            <Image
              className={styles.logo}
              src="/images/logo.png"
              alt="Ademi AB logotyp"
              width={150}
              height={150}
              priority
            />
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Huvudmeny">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={(event) => handleNavigationClick(event, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          className={styles.headerCta}
          href="/#kontaktformular"
        >
          Be om offert
          <ArrowUpRight />
        </Link>

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
            <Link
              href={item.href}
              key={item.href}
              onClick={(event) => handleNavigationClick(event, item.href)}
            >
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
          <Link href="/#kontakt" onClick={() => setOpen(false)}>
            <span>08</span>
            Kontakt
          </Link>
        </nav>
        <div className={styles.mobileContact}>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
        </div>
      </div>
    </header>
  );
}
