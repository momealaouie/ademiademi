"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "@/components/Icons";
import { siteConfig } from "@/lib/site";
import styles from "./ContactForm.module.css";

type SubmitState = "idle" | "sending" | "success" | "error";

function validatePhone(input: HTMLInputElement) {
  const digitCount = input.value.replace(/\D/g, "").length;
  const isValidLength = digitCount >= 7 && digitCount <= 15;
  input.setCustomValidity(
    input.value && !isValidLength
      ? "Ange ett giltigt telefonnummer med 7 till 15 siffror."
      : "",
  );
}

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const phoneInput = form.elements.namedItem(
      "Telefonnummer",
    ) as HTMLInputElement | null;

    if (phoneInput) validatePhone(phoneInput);

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitState("sending");
    const formData = new FormData(form);
    const senderEmail = formData.get("Epost");
    if (typeof senderEmail === "string") {
      formData.append("_replyto", senderEmail);
    }
    formData.append("_subject", "Ny offertförfrågan från ademiademi.com");
    formData.append("_template", "basic");
    formData.append("_captcha", "false");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${siteConfig.email}`,
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        },
      );

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <form
      className={styles.form}
      id="kontaktformular"
      onSubmit={handleSubmit}
      noValidate={false}
    >
      <div className={styles.grid}>
        <p className={styles.requiredNotice}>
          Namn, epost, telefonnummer och företag är obligatoriska. Anteckningar
          är valfritt.
        </p>

        <label className={styles.fullWidth}>
          <span>Namn och efternamn *</span>
          <input
            autoComplete="name"
            maxLength={120}
            name="Namn och efternamn"
            placeholder="Ditt för- och efternamn"
            required
            type="text"
          />
        </label>

        <label>
          <span>Epost *</span>
          <input
            autoComplete="email"
            maxLength={120}
            name="Epost"
            placeholder="namn@foretag.se"
            required
            type="email"
          />
        </label>

        <label>
          <span>Telefonnummer *</span>
          <input
            autoComplete="tel"
            inputMode="tel"
            maxLength={20}
            minLength={7}
            name="Telefonnummer"
            onInput={(event) => {
              const input = event.currentTarget;
              if (input.value.length > 20) input.value = input.value.slice(0, 20);
              validatePhone(input);
            }}
            pattern="(?=(?:[^0-9]*[0-9]){7,15}[^0-9]*$)\\+?[0-9() -]+"
            placeholder="+46 70 123 45 67"
            required
            title="Ange ett giltigt telefonnummer med 7 till 15 siffror. Du kan även använda mellanslag, plus och parenteser."
            type="tel"
          />
        </label>

        <label className={styles.fullWidth}>
          <span>Företag *</span>
          <input
            autoComplete="organization"
            maxLength={100}
            name="Företag"
            placeholder="Företagets namn"
            required
            type="text"
          />
        </label>

        <label className={styles.fullWidth}>
          <span>Anteckningar (valfritt)</span>
          <textarea
            name="Anteckningar"
            placeholder="Berätta kort om produkt, volym och önskad tidsplan."
            rows={5}
          />
        </label>
      </div>

      <input
        aria-hidden="true"
        className={styles.honeypot}
        name="_honey"
        tabIndex={-1}
        type="text"
      />

      <p className={styles.privacyNotice}>
        När du skickar formuläret behandlar vi dina uppgifter för att besvara din
        förfrågan. Läs mer i vår <Link href="/privacy-policy">privacy policy</Link>.
      </p>

      <div className={styles.footer}>
        <p>Fält markerade med * är obligatoriska.</p>
        <button disabled={submitState === "sending"} type="submit">
          {submitState === "sending" ? "Skickar…" : "Skicka förfrågan"}
          <ArrowUpRight />
        </button>
      </div>

      <div aria-live="polite" className={styles.status} role="status">
        {submitState === "success" && (
          <p className={styles.success}>
            Tack! Din förfrågan är skickad. Vi återkommer så snart vi kan.
          </p>
        )}
        {submitState === "error" && (
          <p className={styles.error}>
            Något gick fel. Ring oss på {siteConfig.phoneDisplay} om problemet
            kvarstår.
          </p>
        )}
      </div>
    </form>
  );
}
