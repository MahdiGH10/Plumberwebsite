import { motion } from 'framer-motion';
import Gauge from './Gauge';
import { content } from '../data/content';

export default function Hero() {
  const {
    businessName,
    tagline,
    heroProblem,
    phone,
    phoneRaw,
    cta,
    whatsappId,
    proofItems,
    trustBadge,
  } = content;

  return (
    <section className="hero">
      <div className="hero-pipes" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-text">
          <motion.p
            className="hero-label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            {tagline}
          </motion.p>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
          >
            {businessName}
          </motion.h1>
          <motion.p
            className="hero-problem"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
          >
            {heroProblem}
          </motion.p>

          <motion.div
            className="hero-proof"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.45 }}
          >
            <span className="hero-proof-chip hero-proof-primary">{trustBadge}</span>
            {proofItems.map((item) => (
              <span key={item} className="hero-proof-chip">
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="hero-callout"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.45 }}
          >
            <span className="hero-phone-label">Appelez maintenant</span>
            <span className="hero-phone-number">{phone}</span>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.45 }}
          >
            <a href={`tel:${phoneRaw}`} className="btn-primary btn-call" aria-label={`Appeler SOS DALI au ${phone}`}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{cta.call}</span>
              <span className="arabic">{cta.callAr}</span>
            </a>
            <a
              href={`https://wa.me/${whatsappId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-whatsapp btn-whatsapp-hero"
              aria-label="Contacter SOS DALI sur WhatsApp"
            >
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              <span>{cta.whatsapp}</span>
              <span className="arabic">{cta.whatsappAr}</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 30, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.65, ease: 'easeOut' }}
        >
          <div className="hero-image-frame">
            <picture>
              <source media="(max-width: 680px)" srcSet="/hero.webp" />
              <img
                src="/hero.webp"
                alt="Mascotte plombier SOS DALI avec clé à griffe"
                className="hero-image"
                width="1200"
                height="900"
                fetchPriority="high"
              />
            </picture>
            <div className="hero-image-glow" aria-hidden="true" />
            <div className="hero-gauge-badge" aria-label="Disponibilité du service">
              <Gauge />
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: clamp(1rem, 3vw, 2rem);
          background:
            radial-gradient(circle at 76% 28%, rgba(196,147,63,0.16), transparent 30%),
            radial-gradient(circle at 18% 18%, rgba(78,139,122,0.2), transparent 28%),
            linear-gradient(135deg, var(--ink), var(--petrol) 54%, #081d1f);
        }
        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(243,236,221,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(243,236,221,0.035) 1px, transparent 1px);
          background-size: 54px 54px;
          mask-image: radial-gradient(circle at 58% 42%, black, transparent 72%);
          opacity: 0.42;
        }
        .hero-pipes {
          position: absolute;
          inset: 5% -4%;
          pointer-events: none;
          background:
            linear-gradient(90deg, transparent 0 8%, rgba(196,147,63,0.28) 8.2% 8.6%, transparent 8.8% 100%),
            linear-gradient(0deg, transparent 0 18%, rgba(78,139,122,0.2) 18.2% 18.5%, transparent 18.8% 100%),
            linear-gradient(90deg, transparent 0 88%, rgba(196,147,63,0.22) 88.2% 88.7%, transparent 89% 100%);
          opacity: 0.55;
          animation: pipeDrift 18s ease-in-out infinite alternate;
        }
        .hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          align-items: center;
          gap: clamp(1.2rem, 4vw, 4.5rem);
          max-width: 1180px;
          width: 100%;
        }
        @media (min-width: 840px) {
          .hero-inner {
            grid-template-columns: minmax(360px, 0.9fr) minmax(420px, 1.1fr);
          }
        }
        .hero-text {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          text-align: center;
          order: 2;
        }
        @media (min-width: 840px) {
          .hero-text {
            order: 1;
            text-align: left;
          }
        }
        .hero-label {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--brass);
        }
        .hero-title {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(4rem, 18vw, 6rem);
          text-transform: uppercase;
          line-height: 0.88;
          color: var(--white);
          text-shadow: 0 10px 40px rgba(0,0,0,0.35);
        }
        @media (min-width: 840px) {
          .hero-title {
            font-size: clamp(5.6rem, 9vw, 8.6rem);
          }
        }
        .hero-problem {
          max-width: 34rem;
          margin: 0 auto;
          color: rgba(243,236,221,0.84);
          font-size: clamp(1rem, 2vw, 1.12rem);
          line-height: 1.55;
        }
        @media (min-width: 840px) {
          .hero-problem {
            margin: 0;
          }
        }
        .hero-proof {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
          margin-top: 0.25rem;
        }
        @media (min-width: 840px) {
          .hero-proof {
            justify-content: flex-start;
          }
        }
        .hero-proof-chip {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 0.35rem 0.65rem;
          border: 1px solid rgba(196,147,63,0.24);
          border-radius: 999px;
          background: rgba(255,255,255,0.045);
          color: var(--paper);
          font-family: var(--font-mono);
          font-size: 0.72rem;
        }
        .hero-proof-primary {
          border-color: rgba(78,139,122,0.58);
          color: #9ed2c3;
          background: rgba(78,139,122,0.14);
        }
        .hero-callout {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.1rem;
          margin-top: 0.1rem;
        }
        @media (min-width: 840px) {
          .hero-callout {
            align-items: flex-start;
          }
        }
        .hero-phone-label {
          font-size: 0.85rem;
          color: rgba(243,236,221,0.58);
        }
        .hero-phone-number {
          font-family: var(--font-mono);
          font-size: 1.35rem;
          color: var(--brass);
          font-weight: 600;
        }
        .hero-actions {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          width: 100%;
          max-width: 430px;
          margin: 0.35rem auto 0;
        }
        @media (min-width: 520px) {
          .hero-actions {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (min-width: 840px) {
          .hero-actions {
            margin-left: 0;
          }
        }
        .hero-actions .btn-primary {
          min-width: 0;
          padding-inline: 1rem;
        }
        .arabic {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 0.78rem;
          opacity: 0.82;
          direction: rtl;
        }
        .hero-visual {
          order: 1;
          width: min(100%, 640px);
          margin: 0 auto;
        }
        @media (min-width: 840px) {
          .hero-visual {
            order: 2;
          }
        }
        .hero-image-frame {
          position: relative;
          isolation: isolate;
          border: 1px solid rgba(196,147,63,0.32);
          border-radius: 8px;
          overflow: hidden;
          background: var(--ink);
          box-shadow: 0 34px 90px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.06);
        }
        .hero-image-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background: linear-gradient(90deg, rgba(11,38,40,0.42), transparent 34%, rgba(11,38,40,0.06));
        }
        .hero-image {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          filter: saturate(1.04) contrast(1.02);
        }
        .hero-image-glow {
          position: absolute;
          inset: auto 7% 7% 45%;
          z-index: 3;
          height: 24%;
          border-radius: 999px;
          background: rgba(78,139,122,0.22);
          filter: blur(28px);
          animation: glowPulse 4.5s ease-in-out infinite;
        }
        .hero-gauge-badge {
          position: absolute;
          left: 1rem;
          bottom: 1rem;
          z-index: 4;
          width: 170px;
          transform: scale(0.74);
          transform-origin: bottom left;
          padding: 0.35rem 0.2rem 0;
          border: 1px solid rgba(196,147,63,0.26);
          border-radius: 999px 999px 8px 8px;
          background: rgba(11,38,40,0.82);
          backdrop-filter: blur(10px);
          box-shadow: 0 16px 36px rgba(0,0,0,0.3);
        }
        .btn-whatsapp-hero {
          border: 1px solid rgba(37,211,102,0.62);
          background: rgba(37,211,102,0.09);
          color: #b9f6cf;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.03);
        }
        .btn-whatsapp-hero:hover {
          background: rgba(37,211,102,0.15);
        }
        @media (max-width: 680px) {
          .hero {
            min-height: auto;
            padding: 1rem 1rem 2.25rem;
          }
          .hero-inner {
            gap: 1rem;
          }
          .hero-visual {
            max-width: 440px;
          }
          .hero-image {
            aspect-ratio: 1 / 1;
            object-position: center;
          }
          .hero-image-frame::before {
            background: linear-gradient(180deg, rgba(11,38,40,0.1), rgba(11,38,40,0.34));
          }
          .hero-gauge-badge {
            left: 0.55rem;
            bottom: 0.55rem;
            transform: scale(0.58);
          }
          .hero-title {
            font-size: clamp(3.45rem, 20vw, 5rem);
          }
          .hero-proof-chip {
            min-height: 30px;
            font-size: 0.66rem;
            padding: 0.3rem 0.5rem;
          }
          .hero-actions {
            max-width: none;
          }
        }
        @keyframes pipeDrift {
          from { transform: translate3d(-8px, -6px, 0); }
          to { transform: translate3d(10px, 8px, 0); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.55; transform: scale(0.92); }
          50% { opacity: 0.9; transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}
