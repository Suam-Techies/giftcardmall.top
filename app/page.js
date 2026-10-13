import styles from "./page.module.css";

const faqs = [
  {
    question: "How do I check my card balance?",
    answer:
      "Use the balance-check instructions printed on your card or included with its packaging. Check the web address carefully before entering card information.",
  },
  {
    question: "Why can my available balance change?",
    answer:
      "Purchases, pending authorizations, refunds, and other adjustments can affect the amount currently available on a prepaid card.",
  },
  {
    question: "Why might an online purchase be declined?",
    answer:
      "The card may need activation, the available balance may not cover the total, or the merchant or transaction type may not be supported. Check your card instructions for details.",
  },
  {
    question: "Is GiftBalance an official GiftCardMall or MyGift website?",
    answer:
      "No. GiftBalance is an independent information site and is not affiliated with or endorsed by GiftCardMall, MyGift, or a card issuer.",
  },
];

export default function Home() {
  return (
    <div className={styles.page} id="top">
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="GiftBalance home">
          <span className={styles.brandMark} aria-hidden="true">
            G
          </span>
          <span>GiftBalance</span>
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#balance">Balance guide</a>
          <a href="#using-your-card">Using your card</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>
              Independent prepaid card information
            </span>
            <h1>GiftCardMall &amp; MyGift card guide</h1>
            <p className={styles.heroText}>
              Find straightforward information about checking a prepaid card
              balance, understanding card use, and troubleshooting common
              payment questions.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#balance">
                Read the balance guide <span aria-hidden="true">→</span>
              </a>
              <a className={styles.textLink} href="#faq">
                Browse common questions
              </a>
            </div>
          </div>
          <aside className={styles.heroCard}>
            <div className={styles.cardIcon} aria-hidden="true">
              ✓
            </div>
            <span className={styles.cardLabel}>A safe place to start</span>
            <h2>Check your card’s own instructions first.</h2>
            <p>
              Your card, packaging, or issuer-provided materials identify the
              right way to manage that particular card.
            </p>
          </aside>
        </section>

        <aside className={styles.notice} aria-label="Important information">
          <span className={styles.noticeIcon} aria-hidden="true">
            !
          </span>
          <p>
            <strong>Protect your card details.</strong> This is an informational
            website. Never enter or share your full card number, PIN, or
            security code here.
          </p>
        </aside>

        <section className={styles.section} id="balance">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Balance information</span>
            <h2>How to check your gift card balance</h2>
            <p>
              The balance-check process depends on the card program. Follow the
              directions supplied with your card and verify the destination
              before entering any private information.
            </p>
          </div>
          <div className={styles.steps}>
            <article className={styles.step}>
              <span className={styles.stepNumber}>01</span>
              <h3>Find the instructions</h3>
              <p>
                Look on the back of the card or its packaging for the issuer’s
                balance-check details.
              </p>
            </article>
            <article className={styles.step}>
              <span className={styles.stepNumber}>02</span>
              <h3>Check the web address</h3>
              <p>
                Carefully compare the address with the information provided
                for your card. Avoid unfamiliar links and ads.
              </p>
            </article>
            <article className={styles.step}>
              <span className={styles.stepNumber}>03</span>
              <h3>Review recent activity</h3>
              <p>
                Purchases, refunds, and pending authorizations may change the
                amount currently available.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.featureSection} id="using-your-card">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Card basics</span>
            <h2>Using a prepaid gift card</h2>
            <p>
              Whether a payment works depends on the card’s terms, the
              merchant, and the funds available for the transaction.
            </p>
          </div>
          <div className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <span className={styles.infoIcon} aria-hidden="true">
                ◇
              </span>
              <h3>Merchant acceptance</h3>
              <p>
                Confirm that the merchant accepts the card network and the
                type of purchase you’re making.
              </p>
            </article>
            <article className={styles.infoCard}>
              <span className={styles.infoIcon} aria-hidden="true">
                $
              </span>
              <h3>Available funds</h3>
              <p>
                Make sure the available balance covers the full transaction
                amount, including any applicable authorization.
              </p>
            </article>
            <article className={styles.infoCard}>
              <span className={styles.infoIcon} aria-hidden="true">
                ↗
              </span>
              <h3>Card restrictions</h3>
              <p>
                Some cards limit online, international, recurring, or other
                transaction types. Check the card terms.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.troubleshooting}>
          <div>
            <span className={styles.eyebrow}>Payment help</span>
            <h2>Was your card declined?</h2>
            <p>
              A declined transaction doesn’t always mean the card has no value.
              Check the balance, activation status, payment details, and the
              card’s terms. If the issue continues, contact the issuer using
              the information provided with your card.
            </p>
          </div>
          <ul className={styles.checklist}>
            <li>Confirm the card is activated, if required.</li>
            <li>Check the balance and recent transactions.</li>
            <li>Verify the merchant accepts your card.</li>
            <li>Review your card’s instructions and restrictions.</li>
          </ul>
        </section>

        <section className={styles.faqSection} id="faq">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Quick answers</span>
            <h2>Frequently asked questions</h2>
            <p>Helpful starting points for common GiftCardMall and MyGift searches.</p>
          </div>
          <div className={styles.faqList}>
            {faqs.map(({ question, answer }) => (
              <details className={styles.faqItem} key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.disclaimer}>
          <h2>About this guide</h2>
          <p>
            GiftBalance is an independent informational website. It is not
            affiliated with or endorsed by GiftCardMall, MyGift, Blackhawk
            Network, Visa, Mastercard, American Express, any bank, retailer, or
            gift card issuer. Card programs and servicing steps may vary;
            always follow the instructions provided with your specific card.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <a className={styles.brand} href="#top">
          <span className={styles.brandMark} aria-hidden="true">
            G
          </span>
          <span>GiftBalance</span>
        </a>
        <p>Independent prepaid gift card information.</p>
        <span>© 2026 GiftBalance</span>
      </footer>
    </div>
  );
}
