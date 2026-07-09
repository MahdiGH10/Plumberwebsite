import { motion } from 'framer-motion';
import { content } from '../data/content';

export default function Footer() {
  const { businessName, address, phone, phoneRaw, hours, hoursNote, zones, whatsappId } = content;

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">{businessName}</span>
          <span className="footer-tagline">Plombier · Climatisation · Chauffage</span>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h3 className="footer-heading">Contact</h3>
            <a href={`tel:${phoneRaw}`} className="footer-link">{phone}</a>
            <span className="footer-text">{address}</span>
          </div>
          <div className="footer-col">
            <h3 className="footer-heading">Horaires</h3>
            <span className="footer-text">{hours}</span>
            <span className="footer-text footer-note">{hoursNote}</span>
          </div>
          <div className="footer-col">
            <h3 className="footer-heading">Zones</h3>
            {zones.map((zone) => (
              <span key={zone} className="footer-text">{zone}</span>
            ))}
          </div>
          <div className="footer-col">
            <h3 className="footer-heading">Réseaux</h3>
            <a
              href={`https://wa.me/${whatsappId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} {businessName}. Tous droits réservés.</span>
        </div>
      </div>

      <style>{`
        .footer {
          background: #071d1e;
          border-top: 1px solid rgba(196,147,63,0.15);
          padding: 3rem 1.5rem 1.5rem;
        }
        .footer-inner {
          max-width: 1180px;
          margin: 0 auto;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          margin-bottom: 2rem;
        }
        .footer-logo {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 2rem;
          text-transform: uppercase;
          color: var(--brass);
          line-height: 0.9;
        }
        .footer-tagline {
          font-size: 0.85rem;
          color: rgba(243,236,221,0.55);
        }
        .footer-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 2rem;
          margin-bottom: 2.5rem;
        }
        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .footer-heading {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          text-transform: uppercase;
          color: var(--patina);
          margin-bottom: 0.2rem;
          letter-spacing: 0;
        }
        .footer-link {
          color: var(--brass);
          text-decoration: underline;
          text-underline-offset: 3px;
          font-size: 0.9rem;
          width: fit-content;
        }
        .footer-link:hover {
          opacity: 0.8;
        }
        .footer-text {
          font-size: 0.85rem;
          color: rgba(243,236,221,0.65);
          line-height: 1.5;
        }
        .footer-note {
          font-size: 0.78rem;
          color: rgba(243,236,221,0.4);
        }
        .footer-bottom {
          border-top: 1px solid rgba(196,147,63,0.1);
          padding-top: 1.2rem;
          text-align: center;
          font-size: 0.8rem;
          color: rgba(243,236,221,0.35);
        }
      `}</style>
    </motion.footer>
  );
}
