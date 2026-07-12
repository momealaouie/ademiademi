"use client";

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
      ? "Ange ett giltigt telefonnummer med 7–15 siffror."
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
    formData.append("_subject", "Ny offertförfrågan från ademiademi.com");
    formData.append("_template", "table");
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
        <label>
          <span>Namn *</span>
          <input
            autoComplete="given-name"
            maxLength={60}
            name="Namn"
            placeholder="Ditt namn"
            required
            type="text"
          />
        </label>

        <label>
          <span>Efternamn *</span>
          <input
            autoComplete="family-name"
            maxLength={60}
            name="Efternamn"
            placeholder="Ditt efternamn"
            required
            type="text"
          />
        </label>

        <label>
          <span>E-post *</span>
          <input
            autoComplete="email"
            maxLength={120}
            name="E-post"
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
            title="Ange ett giltigt telefonnummer med 7–15 siffror. Du kan även använda mellanslag, +, bindestreck och parenteser."
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
          <span>Anteckningar *</span>
          <textarea
            maxLength={1500}
            name="Anteckningar"
            placeholder="Berätta kort om produkt, volym och önskad tidsplan."
            required
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
