import { useEffect, useRef, useState } from 'react';
import { createPestRun } from '../utils/pestMotion';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const PEST_TYPES = ['cockroach', 'ant', 'fly', 'mosquito', 'mouse', 'beetle'];

function Cockroach() {
  return (
    <svg viewBox="0 0 64 84" role="presentation" focusable="false">
      <g className="ambient-pest__insect">
        <path className="ambient-pest__antenna" d="M27 12 C18 2, 9 1, 4 6" />
        <path className="ambient-pest__antenna" d="M37 12 C46 2, 55 1, 60 6" />
        <path className="ambient-pest__leg ambient-pest__leg--left" d="M25 31 C14 28, 9 21, 4 18" />
        <path className="ambient-pest__leg ambient-pest__leg--left" d="M23 43 C12 43, 7 39, 2 35" />
        <path className="ambient-pest__leg ambient-pest__leg--left" d="M24 55 C13 60, 9 67, 5 73" />
        <path className="ambient-pest__leg ambient-pest__leg--right" d="M39 31 C50 28, 55 21, 60 18" />
        <path className="ambient-pest__leg ambient-pest__leg--right" d="M41 43 C52 43, 57 39, 62 35" />
        <path className="ambient-pest__leg ambient-pest__leg--right" d="M40 55 C51 60, 55 67, 59 73" />
        <ellipse className="ambient-pest__head" cx="32" cy="22" rx="10" ry="11" />
        <ellipse className="ambient-pest__body" cx="32" cy="48" rx="16" ry="27" />
        <path className="ambient-pest__wing" d="M31 26 C20 33, 20 59, 31 72" />
        <path className="ambient-pest__wing" d="M33 26 C44 33, 44 59, 33 72" />
      </g>
    </svg>
  );
}

function Ant() {
  return (
    <svg viewBox="0 0 80 48" role="presentation" focusable="false">
      <g className="ambient-pest__insect">
        <path className="ambient-pest__antenna" d="M18 17 C9 8, 6 5, 2 8" />
        <path className="ambient-pest__antenna" d="M19 21 C9 27, 6 32, 2 31" />
        <path className="ambient-pest__leg ambient-pest__leg--left" d="M34 18 L24 7" />
        <path className="ambient-pest__leg ambient-pest__leg--left" d="M38 21 L25 21" />
        <path className="ambient-pest__leg ambient-pest__leg--left" d="M35 27 L24 39" />
        <path className="ambient-pest__leg ambient-pest__leg--right" d="M49 18 L58 7" />
        <path className="ambient-pest__leg ambient-pest__leg--right" d="M48 23 L61 23" />
        <path className="ambient-pest__leg ambient-pest__leg--right" d="M48 28 L59 40" />
        <circle className="ambient-pest__head" cx="19" cy="22" r="9" />
        <ellipse className="ambient-pest__body" cx="38" cy="23" rx="10" ry="8" />
        <ellipse className="ambient-pest__body" cx="61" cy="24" rx="16" ry="12" />
      </g>
    </svg>
  );
}

function Fly() {
  return (
    <svg viewBox="0 0 72 58" role="presentation" focusable="false">
      <g className="ambient-pest__insect">
        <ellipse className="ambient-pest__wing-fill ambient-pest__wing-flap ambient-pest__wing-flap--left" cx="24" cy="21" rx="18" ry="10" transform="rotate(-24 24 21)" />
        <ellipse className="ambient-pest__wing-fill ambient-pest__wing-flap ambient-pest__wing-flap--right" cx="50" cy="21" rx="18" ry="10" transform="rotate(24 50 21)" />
        <path className="ambient-pest__leg ambient-pest__leg--left" d="M31 34 L15 50" />
        <path className="ambient-pest__leg ambient-pest__leg--left" d="M34 36 L25 55" />
        <path className="ambient-pest__leg ambient-pest__leg--right" d="M42 34 L57 50" />
        <path className="ambient-pest__leg ambient-pest__leg--right" d="M39 36 L48 55" />
        <circle className="ambient-pest__head" cx="37" cy="24" r="9" />
        <ellipse className="ambient-pest__body" cx="37" cy="39" rx="9" ry="15" />
        <circle className="ambient-pest__eye" cx="33" cy="21" r="3" />
        <circle className="ambient-pest__eye" cx="41" cy="21" r="3" />
      </g>
    </svg>
  );
}

function Mosquito() {
  return (
    <svg viewBox="0 0 90 60" role="presentation" focusable="false">
      <g className="ambient-pest__insect">
        <ellipse className="ambient-pest__wing-fill ambient-pest__wing-flap ambient-pest__wing-flap--left" cx="39" cy="20" rx="22" ry="7" transform="rotate(-25 39 20)" />
        <ellipse className="ambient-pest__wing-fill ambient-pest__wing-flap ambient-pest__wing-flap--right" cx="52" cy="19" rx="22" ry="7" transform="rotate(25 52 19)" />
        <line className="ambient-pest__antenna" x1="26" y1="31" x2="5" y2="28" />
        <path className="ambient-pest__leg ambient-pest__leg--left" d="M38 34 L17 55" />
        <path className="ambient-pest__leg ambient-pest__leg--left" d="M42 35 L31 59" />
        <path className="ambient-pest__leg ambient-pest__leg--right" d="M50 34 L71 55" />
        <path className="ambient-pest__leg ambient-pest__leg--right" d="M47 35 L57 59" />
        <circle className="ambient-pest__head" cx="29" cy="31" r="6" />
        <ellipse className="ambient-pest__body" cx="48" cy="33" rx="18" ry="5" />
        <path className="ambient-pest__body-line" d="M63 33 L84 37" />
      </g>
    </svg>
  );
}

function Mouse() {
  return (
    <svg viewBox="0 0 100 56" role="presentation" focusable="false">
      <g className="ambient-pest__insect">
        <path className="ambient-pest__tail" d="M75 37 C92 37, 98 27, 95 17 C93 10, 88 8, 84 10" />
        <ellipse className="ambient-pest__mouse-body" cx="55" cy="33" rx="29" ry="18" />
        <circle className="ambient-pest__mouse-head" cx="27" cy="30" r="14" />
        <circle className="ambient-pest__mouse-ear" cx="31" cy="17" r="7" />
        <circle className="ambient-pest__mouse-eye" cx="20" cy="27" r="2.6" />
        <path className="ambient-pest__whisker" d="M14 32 L1 27 M14 35 L0 35 M15 38 L3 44" />
        <path className="ambient-pest__leg ambient-pest__leg--left" d="M42 43 L34 53" />
        <path className="ambient-pest__leg ambient-pest__leg--right" d="M65 43 L73 53" />
      </g>
    </svg>
  );
}

function Beetle() {
  return (
    <svg viewBox="0 0 72 76" role="presentation" focusable="false">
      <g className="ambient-pest__insect">
        <path className="ambient-pest__antenna" d="M30 17 C20 7, 12 7, 8 10" />
        <path className="ambient-pest__antenna" d="M42 17 C52 7, 60 7, 64 10" />
        <path className="ambient-pest__leg ambient-pest__leg--left" d="M28 33 L10 24 M26 43 L7 43 M29 53 L11 64" />
        <path className="ambient-pest__leg ambient-pest__leg--right" d="M44 33 L62 24 M46 43 L65 43 M43 53 L61 64" />
        <ellipse className="ambient-pest__head" cx="36" cy="23" rx="12" ry="10" />
        <ellipse className="ambient-pest__body" cx="36" cy="47" rx="20" ry="25" />
        <path className="ambient-pest__wing" d="M36 25 L36 70" />
      </g>
    </svg>
  );
}

function PestArtwork({ type }) {
  switch (type) {
    case 'ant': return <Ant />;
    case 'fly': return <Fly />;
    case 'mosquito': return <Mosquito />;
    case 'mouse': return <Mouse />;
    case 'beetle': return <Beetle />;
    default: return <Cockroach />;
  }
}

export default function AmbientPest() {
  const pestRef = useRef(null);
  const previousPestRef = useRef('cockroach');
  const [pestType, setPestType] = useState('cockroach');

  useEffect(() => {
    const element = pestRef.current;
    if (!element || typeof element.animate !== 'function') return undefined;

    const motionPreference = window.matchMedia(REDUCED_MOTION_QUERY);
    let timeoutId;
    let activeAnimation;
    let stopped = false;

    const clearActivity = () => {
      window.clearTimeout(timeoutId);
      activeAnimation?.cancel();
      activeAnimation = undefined;
      element.style.opacity = '0';
    };

    const scheduleRun = (delayMs) => {
      window.clearTimeout(timeoutId);
      if (stopped || motionPreference.matches) return;
      timeoutId = window.setTimeout(runPest, delayMs);
    };

    const choosePest = () => {
      const alternatives = PEST_TYPES.filter((type) => type !== previousPestRef.current);
      const nextType = alternatives[Math.floor(Math.random() * alternatives.length)];
      previousPestRef.current = nextType;
      setPestType(nextType);
    };

    const runPest = () => {
      if (stopped || motionPreference.matches) return;

      choosePest();
      const route = createPestRun(window.innerWidth, window.innerHeight);
      activeAnimation = element.animate(route.keyframes, {
        duration: route.durationMs,
        fill: 'forwards',
        iterations: 1,
      });

      activeAnimation.onfinish = () => {
        activeAnimation = undefined;
        element.style.opacity = '0';
        scheduleRun(route.idleMs);
      };

      activeAnimation.oncancel = () => {
        activeAnimation = undefined;
      };
    };

    const handlePreferenceChange = () => {
      clearActivity();
      if (!motionPreference.matches) {
        scheduleRun(3500 + (Math.random() * 4500));
      }
    };

    if (!motionPreference.matches) {
      scheduleRun(4500 + (Math.random() * 5500));
    }

    motionPreference.addEventListener?.('change', handlePreferenceChange);

    return () => {
      stopped = true;
      clearActivity();
      motionPreference.removeEventListener?.('change', handlePreferenceChange);
    };
  }, []);

  return (
    <div ref={pestRef} className="ambient-pest" data-pest={pestType} aria-hidden="true">
      <PestArtwork type={pestType} />
    </div>
  );
}
