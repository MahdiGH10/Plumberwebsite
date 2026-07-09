import { motion } from 'framer-motion';
import { content } from '../data/content';

export default function Contact() {
  const { address, hours, hoursNote, zones, phone, phoneRaw } = content;

  return (
    <section className="section contact-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45 }}
      >
        Contact
      </motion.h2>

      <div className="contact-grid">
        <motion.article className="contact-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08, duration: 0.35 }}>
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brass)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <h3>Adresse</h3>
          <p>{address}</p>
        </motion.article>

        <motion.article className="contact-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16, duration: 0.35 }}>
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brass)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <h3>Horaires</h3>
          <p>{hours}</p>
          <p className="contact-note">{hoursNote}</p>
        </motion.article>

        <motion.article className="contact-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.24, duration: 0.35 }}>
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brass)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <h3>Téléphone</h3>
          <a href={`tel:${phoneRaw}`} className="contact-phone" aria-label={`Appeler SOS DALI au ${phone}`}>{phone}</a>
        </motion.article>

        <motion.article className="contact-card contact-zones" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.32, duration: 0.35 }}>
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brass)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
          </svg>
          <h3>Zones desservies</h3>
          <p>{zones.join(' · ')}</p>
        </motion.article>
      </div>

      <style>{`
        .contact-section {
          background:
            radial-gradient(circle at 12% 8%, rgba(78,139,122,0.1), transparent 22rem),
            var(--ink);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          max-width: 760px;
          margin: 0 auto;
        }
        @media (min-width: 640px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .contact-card {
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(196,147,63,0.17);
          border-radius: 8px;
          padding: 1.35rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .contact-card svg {
          margin-bottom: 0.25rem;
        }
        .contact-card h3 {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.22rem;
          text-transform: uppercase;
          letter-spacing: 0;
          color: var(--brass);
          line-height: 1;
        }
        .contact-card p {
          font-size: 0.93rem;
          color: rgba(243,236,221,0.76);
          line-height: 1.5;
        }
        .contact-note {
          font-size: 0.82rem !important;
          color: rgba(243,236,221,0.5) !important;
        }
        .contact-phone {
          width: fit-content;
          font-family: var(--font-mono);
          font-size: 1rem;
          color: var(--brass);
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .contact-zones {
          grid-column: 1 / -1;
        }
        .contact-zones p {
          max-width: 560px;
        }
      `}</style>
    </section>
  );
}
