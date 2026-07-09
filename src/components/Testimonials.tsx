import { motion } from 'framer-motion';
import { content } from '../data/content';

function Stars({ count }: { count: number }) {
  return (
    <span className="stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? 'var(--brass)' : 'none'}
          stroke="var(--brass)"
          strokeWidth="2"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

export default function Testimonials() {
  const { trustBadge, rating, reviewCount, testimonials, googleMapsUrl } = content;

  return (
    <section className="section testimonials-section">
      <motion.div
        className="trust-badge"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--patina)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span>{trustBadge}</span>
      </motion.div>

      <motion.div
        className="rating-row"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.12, duration: 0.4 }}
      >
        <span className="rating-number">{rating}</span>
        <Stars count={Math.round(rating)} />
        <a
          className="rating-count rating-link"
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Voir les avis Google de SOS DALI Plombier"
        >
          - {reviewCount} avis Google
        </a>
      </motion.div>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.article
            key={t.author}
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: i * 0.08, duration: 0.38 }}
          >
            <Stars count={t.rating} />
            <p className="testimonial-text" dir="auto">"{t.text}"</p>
            <div className="testimonial-meta">
              <p className="testimonial-author">- {t.author}</p>
              <a
                href={t.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonial-source"
                aria-label={`Voir l'avis Google de ${t.author}`}
              >
                Avis Google
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <style>{`
        .testimonials-section {
          text-align: center;
        }
        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.7rem 1.25rem;
          border: 1px solid rgba(78,139,122,0.72);
          border-radius: 50px;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: #9ed2c3;
          margin-bottom: 1.4rem;
          background: rgba(78,139,122,0.08);
        }
        .rating-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        .rating-number {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 2.2rem;
          line-height: 1;
          color: var(--brass);
        }
        .rating-count {
          font-size: 0.9rem;
          color: rgba(243,236,221,0.62);
        }
        .rating-link {
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 4px;
          transition: opacity 0.2s ease, color 0.2s ease;
        }
        .rating-link:hover {
          color: var(--brass);
          opacity: 1;
        }
        .stars {
          display: inline-flex;
          gap: 2px;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          max-width: 900px;
          margin: 0 auto;
        }
        @media (min-width: 680px) {
          .testimonials-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .testimonial-card {
          background: var(--paper);
          color: var(--ink);
          padding: 1.35rem;
          border-radius: 8px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          box-shadow: 0 18px 48px rgba(0,0,0,0.16);
        }
        .testimonial-text {
          font-size: 0.95rem;
          line-height: 1.5;
          font-style: italic;
        }
        .testimonial-author {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          opacity: 0.65;
        }
        .testimonial-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-top: auto;
        }
        .testimonial-source {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--ink);
          opacity: 0.55;
          text-decoration: underline;
          text-underline-offset: 3px;
          white-space: nowrap;
          transition: opacity 0.2s ease;
        }
        .testimonial-source:hover {
          opacity: 0.9;
        }
        @media (max-width: 420px) {
          .testimonial-card {
            padding: 1.15rem;
          }
          .testimonial-meta {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.35rem;
          }
        }
      `}</style>
    </section>
  );
}
