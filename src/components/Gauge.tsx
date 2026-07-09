import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  animate,
} from 'framer-motion';
import { useEffect, useState } from 'react';

const CX = 120;
const CY = 125;
const R = 82;
const INNER_R = 74;

function polarToCartesian(
  cx: number,
  cy: number,
  r: number,
  angleDeg: number
) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcPath(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
  sweep: 0 | 1
) {
  const start = polarToCartesian(cx, cy, r, startAngle);
  const end = polarToCartesian(cx, cy, r, endAngle);
  const large = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${large} ${sweep} ${end.x} ${end.y}`;
}

export default function Gauge() {
  const shouldReduceMotion = useReducedMotion();
  const needleAngle = useMotionValue(-72);
  const [isComplete, setIsComplete] = useState(Boolean(shouldReduceMotion));

  useEffect(() => {
    if (shouldReduceMotion) {
      needleAngle.set(24);
      setIsComplete(true);
      return;
    }

    const controls = animate(needleAngle, 24, {
      type: 'spring',
      stiffness: 60,
      damping: 16,
      mass: 1.2,
      onComplete: () => setIsComplete(true),
    });
    return controls.stop;
  }, [needleAngle, shouldReduceMotion]);

  const needleTransform = useTransform(
    needleAngle,
    (a) => `translate(${CX} ${CY}) rotate(${a})`
  );

  const outerArc = arcPath(CX, CY, R, 180, 360, 1);
  const greenArc = arcPath(CX, CY, INNER_R, 218, 326, 1);

  const ticks = [];
  for (let i = 0; i <= 10; i++) {
    const angle = 180 + (i * 180) / 10;
    const outer = polarToCartesian(CX, CY, R + 4, angle);
    const inner = polarToCartesian(CX, CY, R - 8, angle);
    const labelPt = polarToCartesian(CX, CY, R - 18, angle);
    const isMain = i % 2 === 0;
    ticks.push(
      <g key={i}>
        <line
          x1={outer.x}
          y1={outer.y}
          x2={isMain ? inner.x : polarToCartesian(CX, CY, R - 4, angle).x}
          y2={isMain ? inner.y : polarToCartesian(CX, CY, R - 4, angle).y}
          stroke="var(--brass)"
          strokeWidth={isMain ? 2 : 1}
          opacity={0.7}
        />
        {isMain && (
          <text
            x={labelPt.x}
            y={labelPt.y}
            textAnchor="middle"
            dominantBaseline="central"
            fill="var(--brass)"
            fontSize="9"
            fontFamily="'JetBrains Mono Variable', monospace"
            opacity={0.6}
          >
            {i * 2}
          </text>
        )}
      </g>
    );
  }

  return (
    <svg
      role="img"
      aria-label="Disponibilité: disponible, lundi à samedi de 9h à 17h"
      viewBox="0 0 240 170"
      width="240"
      height="170"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d={outerArc}
        fill="none"
        stroke="var(--brass)"
        strokeWidth="2"
        opacity={0.35}
      />

      <path
        d={greenArc}
        fill="none"
        stroke="var(--patina)"
        strokeWidth="12"
        strokeLinecap="round"
        opacity={0.8}
      />

      {ticks}

      <text
        x={CX}
        y={CY + 18}
        textAnchor="middle"
        fill="var(--brass)"
        fontSize="10"
        fontFamily="'JetBrains Mono Variable', monospace"
        letterSpacing="1"
        opacity={0.5}
      >
        BAR
      </text>

      <motion.g transform={needleTransform}>
        <polygon points="-3,12 3,12 0,-75" fill="var(--red)" filter="url(#glow)" />
        <circle cx={0} cy={0} r="6" fill="var(--brass)" />
        <circle cx={0} cy={0} r="2.5" fill="var(--ink)" />
      </motion.g>

      {isComplete && (
        <motion.text
          x={CX}
          y={CY + 50}
          textAnchor="middle"
          fill="var(--patina)"
          fontSize="14"
          fontFamily="'JetBrains Mono Variable', monospace"
          fontWeight="600"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 50 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          Disponible
        </motion.text>
      )}

      <motion.text
        x={CX}
        y={CY + 68}
        textAnchor="middle"
        fill="var(--paper)"
        fontSize="9"
        fontFamily="'JetBrains Mono Variable', monospace"
        opacity={0.5}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        Lun–Sam 9h–17h
      </motion.text>
    </svg>
  );
}
