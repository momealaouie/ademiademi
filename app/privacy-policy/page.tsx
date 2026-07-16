import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Information om hur Ademi AB samlar in, använder och skyddar personuppgifter.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className={styles.main} id="top">
        <section className={styles.hero} aria-labelledby="privacy-title">
          <div className="page-shell">
            <p className="eyebrow">Privacy policy</p>
            <h1 id="privacy-title">Integritetspolicy.</h1>
            <p className={styles.lead}>
              Här beskriver vi hur Ademi AB behandlar personuppgifter när du
              besöker vår webbplats eller kontaktar oss.
            </p>
            <p className={styles.date}>Gäller från och med 15 juli 2026</p>
          </div>
        </section>

        <div className={`page-shell ${styles.layout}`}>
          <aside className={styles.aside} aria-label="Innehåll">
            <p>På den här sidan</p>
            <a href="#ansvarig">Personuppgiftsansvarig</a>
            <a href="#uppgifter">Uppgifter vi behandlar</a>
            <a href="#anvandning">Så använder vi uppgifterna</a>
            <a href="#delning">Mottagare och överföringar</a>
            <a href="#cookies">Cookies och externa tjänster</a>
            <a href="#rattigheter">Dina rättigheter</a>
            <a href="#kontakt">Kontakt</a>
          </aside>

          <article className={styles.content}>
            <section id="ansvarig">
              <p className={styles.number}>01</p>
              <h2>Personuppgiftsansvarig</h2>
              <p>
                AB Ademi &amp; Ademi, som på webbplatsen benämns Ademi AB, är
                personuppgiftsansvarig för den behandling som beskrivs i denna
                policy.
              </p>
              <address>
                Ademi AB
                <br />
                {siteConfig.address}
                <br />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                <br />
                <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
              </address>
            </section>

            <section id="uppgifter">
              <p className={styles.number}>02</p>
              <h2>Personuppgifter vi behandlar</h2>
              <p>När du använder kontaktformuläret kan vi få ditt:</p>
              <ul>
                <li>namn och efternamn</li>
                <li>e-postadress och telefonnummer</li>
                <li>företagsnamn</li>
                <li>meddelande och annan information du själv lämnar</li>
              </ul>
              <p>
                När du besöker webbplatsen kan tekniska uppgifter behandlas,
                exempelvis IP-adress, enhets- och webbläsarinformation, tidpunkt
                samt vilka sidor som begärs. Uppgifterna uppstår i samband med
                drift, säkerhet och användning av externa funktioner.
              </p>
            </section>

            <section id="anvandning">
              <p className={styles.number}>03</p>
              <h2>Så använder vi uppgifterna</h2>
              <div className={styles.purpose}>
                <h3>Förfrågningar och offerter</h3>
                <p>
                  Vi använder uppgifter som du skickar för att besvara frågor,
                  ta fram offert, följa upp din förfrågan och vid behov förbereda
                  eller fullgöra ett avtal. Behandlingen grundas på åtgärder före
                  avtal och på vårt berättigade intresse av att kommunicera med
                  kunder och potentiella kunder.
                </p>
              </div>
              <div className={styles.purpose}>
                <h3>Drift och säkerhet</h3>
                <p>
                  Tekniska uppgifter kan användas för att leverera webbplatsen,
                  förebygga missbruk, felsöka och upprätthålla säkerheten. Detta
                  grundas på vårt berättigade intresse av en säker och fungerande
                  webbplats.
                </p>
              </div>
              <div className={styles.purpose}>
                <h3>Marknadsföring</h3>
                <p>
                  Vi skickar inte marknadsföring via e-post eller sms utan en
                  tillämplig rättslig grund. Du kan alltid invända mot
                  direktmarknadsföring och avregistrera dig från framtida utskick.
                </p>
              </div>
              <p>
                Vi använder inte uppgifterna för automatiserat beslutsfattande
                eller profilering som får rättsliga eller liknande betydande
                konsekvenser för dig.
              </p>
            </section>

            <section id="lagring">
              <p className={styles.number}>04</p>
              <h2>Hur länge uppgifterna sparas</h2>
              <p>
                Uppgifter från förfrågningar sparas så länge de behövs för att
                hantera ärendet och normalt högst 24 månader efter den senaste
                kontakten. Om kontakten leder till ett kundförhållande kan
                uppgifter sparas längre när det behövs för avtalet, bokföring,
                rättsliga anspråk eller andra lagkrav.
              </p>
              <p>
                Tekniska uppgifter och uppgifter hos externa tjänster sparas
                enligt respektive leverantörs inställningar och villkor. Vi
                strävar efter att inte spara personuppgifter längre än vad som är
                nödvändigt för respektive ändamål.
              </p>
            </section>

            <section id="delning">
              <p className={styles.number}>05</p>
              <h2>Mottagare och överföringar</h2>
              <p>
                Vi säljer inte dina personuppgifter. Uppgifter kan behandlas av
                leverantörer som hjälper oss att driva webbplatsen och ta emot
                formulär, i dagsläget bland annat Vercel, FormSubmit och Google
                Maps. Uppgifter kan även lämnas till myndigheter eller rådgivare
                när lag kräver det eller när det behövs för att fastställa,
                göra gällande eller försvara rättsliga anspråk.
              </p>
              <p>
                Vissa leverantörer kan behandla uppgifter utanför EU och EES.
                När vi ansvarar för en sådan överföring ska den ske med en
                tillåten överföringsmekanism, exempelvis EU-kommissionens
                standardavtalsklausuler eller ett beslut om adekvat skyddsnivå.
              </p>
            </section>

            <section id="cookies">
              <p className={styles.number}>06</p>
              <h2>Cookies och externa tjänster</h2>
              <p>
                Ademi AB använder för närvarande inte någon egen analys- eller
                annonspixel på webbplatsen. Webbplatsen bäddar däremot in Google
                Maps. När kartan laddas kan Google ta emot tekniska uppgifter,
                till exempel din IP-adress, och använda cookies eller liknande
                teknik enligt Googles egna villkor och sekretesspolicy.
              </p>
              <p>
                Du kan blockera eller radera cookies i webbläsarens inställningar.
                Det kan påverka hur kartan fungerar. Om vi i framtiden lägger till
                analys- eller marknadsföringsverktyg uppdaterar vi denna policy och
                inför nödvändiga val för samtycke innan sådan teknik används.
              </p>
            </section>

            <section id="rattigheter">
              <p className={styles.number}>07</p>
              <h2>Dina rättigheter</h2>
              <p>
                Du har, när förutsättningarna i GDPR är uppfyllda, rätt att:
              </p>
              <ul>
                <li>få information om och tillgång till dina personuppgifter</li>
                <li>få felaktiga eller ofullständiga uppgifter rättade</li>
                <li>begära radering eller begränsning av behandlingen</li>
                <li>invända mot behandling som grundas på berättigat intresse</li>
                <li>få ut vissa uppgifter i ett strukturerat format</li>
                <li>återkalla ett samtycke när behandlingen grundas på samtycke</li>
              </ul>
              <p>
                Kontakta oss för att utöva en rättighet. Vi kan behöva kontrollera
                din identitet och svarar normalt inom en månad. Du har också rätt
                att lämna klagomål till Integritetsskyddsmyndigheten, IMY, via
                <a
                  href="https://www.imy.se"
                  target="_blank"
                  rel="noreferrer"
                >
                  imy.se
                </a>
                .
              </p>
            </section>

            <section id="kontakt">
              <p className={styles.number}>08</p>
              <h2>Frågor om integritet</h2>
              <p>
                Har du frågor om policyn eller hur vi behandlar dina uppgifter,
                kontakta oss på
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
              </p>
              <p>
                Vi kan uppdatera policyn när webbplatsen, våra tjänster eller
                tillämpliga regler förändras. Den senaste versionen finns alltid
                på den här sidan.
              </p>
              <Link className={styles.backLink} href="/">
                Till startsidan
              </Link>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
