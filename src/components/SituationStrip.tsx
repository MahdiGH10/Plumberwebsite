import { motion } from 'framer-motion';
import { content } from '../data/content';

function SituationIcon({ id }: { id: string }) {
  if (id === 'fuite') {
    return <path d="M12 2s6 6.6 6 12a6 6 0 0 1-12 0c0-5.4 6-12 6-12z" />;
  }

  if (id === 'chauffage') {
    return <path d="M12 3c2.4 2.2 4 4.5 4 7a4 4 0 0 1-8 0c0-2.5 1.6-4.8 4-7zm0 9c1.7 1.4 3 2.9 3 5a3 3 0 0 1-6 0c0-2.1 1.3-3.6 3-5z" />;
  }

  if (id === 'clim') {
    return (
      <>
        <path d="M12 2v20" />
        <path d="m4.9 4.9 14.2 14.2" />
        <path d="m19.1 4.9-14.2 14.2" />
        <circle cx="12" cy="12" r="3" />
      </>
    );
  }

  return <path d="M13 2 4 14h7l-1 8 10-13h-7l0-7z" />;
}

export default function SituationStrip() {
  return (
    <section className="situation-strip" aria-labelledby="situations-title">
      <div className="situation-inner">
        <div className="situation-heading">
          <p className="situation-kicker">Situations traitées</p>
          <h2 id="situations-title">Le bon réflexe quand ça ne peut pas attendre</h2>
        </div>

        <div className="situation-grid">
          {content.situations.map((item, index) => (
            <motion.article
              key={item.id}
              className="situation-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
            >
              <svg
                className="situation-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <SituationIcon id={item.id} />
              </svg>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .situation-strip {
          padding: 2.6rem 1.5rem;
          background:
            linear-gradient(90deg, rgba(196,147,63,0.08), transparent 22%, transparent 78%, rgba(78,139,122,0.1)),
            linear-gradient(180deg, var(--ink), var(--petrol));
          border-top: 1px solid rgba(196,147,63,0.12);
          border-bottom: 1px solid rgba(196,147,63,0.12);
        }
        .situation-inner {
          max-width: 1120px;
          margin: 0 auto;
        }
        .situation-heading {
          display: grid;
          gap: 0.45rem;
          margin-bottom: 1.4rem;
        }
        @media (min-width: 780px) {
          .situation-heading {
            grid-template-columns: 0.8fr 1.2fr;
            align-items: end;
          }
        }
        .situation-kicker {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #9ed2c3;
        }
        .situation-heading h2 {
          font-family: var(--font-display);
          font-size: clamp(2rem, 6vw, 3.25rem);
          line-height: 0.95;
          text-transform: uppercase;
          color: var(--paper);
          letter-spacing: 0;
        }
        .situation-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.8rem;
        }
        @media (min-width: 640px) {
          .situation-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 980px) {
          .situation-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .situation-card {
          min-height: 154px;
          padding: 1.15rem;
          border: 1px solid rgba(196,147,63,0.22);
          border-radius: 8px;
          background: rgba(11,38,40,0.58);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .situation-card:hover {
          transform: translateY(-3px);
          border-color: rgba(196,147,63,0.5);
        }
        .situation-icon {
          color: var(--brass);
          margin-bottom: 0.85rem;
        }
        .situation-card h3 {
          font-family: var(--font-display);
          font-size: 1.35rem;
          line-height: 1;
          color: var(--brass);
          text-transform: uppercase;
          letter-spacing: 0;
          margin-bottom: 0.45rem;
        }
        .situation-card p {
          font-size: 0.9rem;
          color: rgba(243,236,221,0.74);
          line-height: 1.45;
        }
      `}</style>
    </section>
  );
}
