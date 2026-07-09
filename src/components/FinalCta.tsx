import { motion } from 'framer-motion';
import { content } from '../data/content';

export default function FinalCta() {
  const { phoneRaw, whatsappId, cta, trustBadge } = content;

  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <motion.div
        className="final-cta-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="final-cta-copy-block">
          <p className="final-cta-kicker">{trustBadge}</p>
          <h2 id="final-cta-title">Besoin d'une intervention aujourd'hui ?</h2>
          <p className="final-cta-copy">
            Appelez directement SOS DALI pour une fuite, un problème de gaz, de chauffage ou de climatisation à Tunis.
          </p>
        </div>
        <div className="final-cta-actions">
          <a href={`tel:${phoneRaw}`} className="btn-primary btn-call" aria-label="Appeler SOS DALI maintenant">
            {cta.call}
            <span className="final-cta-ar">{cta.callAr}</span>
          </a>
          <a
            href={`https://wa.me/${whatsappId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary final-cta-whatsapp"
            aria-label="Contacter SOS DALI sur WhatsApp"
          >
            {cta.whatsapp}
            <span className="final-cta-ar">{cta.whatsappAr}</span>
          </a>
        </div>
      </motion.div>

      <style>{`
        .final-cta {
          padding: 4rem 1rem;
          background:
            radial-gradient(circle at 50% 0%, rgba(196,147,63,0.14), transparent 42%),
            linear-gradient(180deg, var(--petrol), var(--ink));
        }
        .final-cta-card {
          position: relative;
          max-width: 920px;
          margin: 0 auto;
          padding: clamp(1.4rem, 5vw, 3rem);
          border: 1px solid rgba(196,147,63,0.3);
          border-radius: 8px;
          background:
            linear-gradient(135deg, rgba(11,38,40,0.92), rgba(18,59,61,0.82)),
            var(--ink);
          overflow: hidden;
          box-shadow: 0 24px 70px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.05);
        }
        .final-cta-card::after {
          content: '';
          position: absolute;
          inset: -40% -10% auto auto;
          width: 260px;
          height: 260px;
          border: 1px solid rgba(196,147,63,0.15);
          border-radius: 50%;
          pointer-events: none;
        }
        @media (min-width: 780px) {
          .final-cta-card {
            display: grid;
            grid-template-columns: 1.35fr 0.65fr;
            align-items: center;
            gap: 2rem;
          }
        }
        .final-cta-copy-block {
          position: relative;
          z-index: 1;
          text-align: center;
        }
        @media (min-width: 780px) {
          .final-cta-copy-block {
            text-align: left;
          }
        }
        .final-cta-kicker {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: #9ed2c3;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          margin-bottom: 0.7rem;
        }
        .final-cta h2 {
          font-family: var(--font-display);
          font-size: clamp(2.55rem, 9vw, 4.4rem);
          line-height: 0.94;
          color: var(--white);
          text-transform: uppercase;
          letter-spacing: 0;
          margin-bottom: 0.8rem;
        }
        .final-cta-copy {
          max-width: 38rem;
          margin: 0 auto 1.5rem;
          color: rgba(243,236,221,0.76);
          font-size: 1rem;
          line-height: 1.6;
        }
        @media (min-width: 780px) {
          .final-cta-copy {
            margin-left: 0;
            margin-bottom: 0;
          }
        }
        .final-cta-actions {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 0.75rem;
        }
        .final-cta-actions .btn-primary {
          width: 100%;
        }
        .final-cta-whatsapp {
          border: 1px solid rgba(37,211,102,0.65);
          background: rgba(37,211,102,0.1);
          color: #b9f6cf;
        }
        .final-cta-whatsapp:hover {
          background: rgba(37,211,102,0.16);
        }
        .final-cta-ar {
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 500;
          opacity: 0.82;
          direction: rtl;
        }
      `}</style>
    </section>
  );
}
