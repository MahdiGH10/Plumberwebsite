import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { content } from '../data/content';

const nodeIcons: Record<string, string> = {
  plomberie: 'PL',
  chauffage: 'GAZ',
  climatisation: 'AC',
  urgences: 'SOS',
};

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const dashOffset = useTransform(scrollYProgress, [0, 1], [740, 0]);

  return (
    <section ref={sectionRef} className="section services-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        Services
      </motion.h2>
      <motion.p
        className="services-sub"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.12, duration: 0.45 }}
      >
        Une expertise complète pour votre habitat
      </motion.p>

      <div className="services-pipe-wrapper">
        <svg
          className="services-pipe"
          viewBox="0 0 800 110"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <line
            x1="40"
            y1="44"
            x2="760"
            y2="44"
            stroke="var(--brass)"
            strokeWidth="5"
            opacity={0.22}
            strokeLinecap="round"
          />
          <motion.line
            x1="40"
            y1="44"
            x2="760"
            y2="44"
            stroke="var(--patina)"
            strokeWidth="5"
            strokeDasharray="12 10"
            strokeLinecap="round"
            style={{ strokeDashoffset: dashOffset }}
          />
          {content.services.map((svc, i) => {
            const cx = 40 + (i + 0.5) * (720 / content.services.length);
            return (
              <g key={svc.id}>
                <circle
                  cx={cx}
                  cy={44}
                  r="22"
                  fill="var(--ink)"
                  stroke="var(--brass)"
                  strokeWidth="2.5"
                />
                <circle cx={cx} cy={44} r="15" fill="rgba(196,147,63,0.08)" />
                <text
                  x={cx}
                  y={48}
                  textAnchor="middle"
                  fontSize="11"
                  fill="var(--brass)"
                  fontFamily="'JetBrains Mono Variable', monospace"
                  fontWeight="700"
                >
                  <tspan>{nodeIcons[svc.id] || '•'}</tspan>
                </text>
              </g>
            );
          })}
        </svg>

        <div className="services-grid">
          {content.services.map((svc, i) => (
            <motion.article
              key={svc.id}
              className="service-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: i * 0.08, duration: 0.38 }}
            >
              <span className="service-code">{nodeIcons[svc.id]}</span>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          background:
            radial-gradient(circle at 86% 8%, rgba(196,147,63,0.08), transparent 24rem),
            var(--ink);
        }
        .services-sub {
          font-size: 0.98rem;
          color: rgba(243,236,221,0.68);
          margin-bottom: 2.4rem;
        }
        .services-pipe-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }
        .services-pipe {
          width: 100%;
          height: auto;
          margin-bottom: 1.2rem;
          overflow: visible;
        }
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.9rem;
        }
        @media (min-width: 560px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 920px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.1rem;
          }
        }
        .service-card {
          position: relative;
          min-height: 176px;
          background: linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025));
          border: 1px solid rgba(196,147,63,0.2);
          border-radius: 8px;
          padding: 1.25rem 1rem;
          overflow: hidden;
          transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
        }
        .service-card::after {
          content: '';
          position: absolute;
          inset: auto -20% -34% 42%;
          height: 76px;
          background: rgba(78,139,122,0.18);
          filter: blur(30px);
          pointer-events: none;
        }
        .service-card:hover {
          transform: translateY(-4px);
          border-color: rgba(196,147,63,0.58);
          background: rgba(196,147,63,0.075);
        }
        .service-code {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 28px;
          margin-bottom: 0.8rem;
          border: 1px solid rgba(196,147,63,0.28);
          border-radius: 999px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--brass);
          background: rgba(11,38,40,0.66);
        }
        .service-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.45rem;
          text-transform: uppercase;
          letter-spacing: 0;
          line-height: 1;
          color: var(--brass);
          margin-bottom: 0.45rem;
        }
        .service-desc {
          font-size: 0.88rem;
          color: rgba(243,236,221,0.72);
          line-height: 1.5;
        }
        @media (max-width: 559px) {
          .services-pipe {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
