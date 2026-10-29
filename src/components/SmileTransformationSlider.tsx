import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Language, translations } from '../translations';

interface CaseStudy {
  id: string;
  title: string;
  titleGu: string;
  procedure: string;
  procedureGu: string;
  timeframe: string;
  timeframeGu: string;
  beforeDescription: string;
  beforeDescriptionGu: string;
  afterDescription: string;
  afterDescriptionGu: string;
  highlightPoints: string[];
  highlightPointsGu: string[];
}

const CASES: CaseStudy[] = [
  {
    id: 'makeover',
    title: 'Aesthetic Smile Makeover',
    titleGu: 'કોસ્મેટિક સ્માઇલ મેકઓવર',
    procedure: 'Ultra-thin Porcelain Veneers & Bleaching',
    procedureGu: 'અલ્ટ્રા-થિન પોર્સેલિન વિનિયર્સ અને ટીથ વ્હાઇટનિંગ',
    timeframe: '2 Clinical Visits',
    timeframeGu: 'માત્ર ૨ ક્લિનિકલ મુલાકાત',
    beforeDescription: 'Discolored enamel, midline gap (diastema), and uneven incisal edges.',
    beforeDescriptionGu: 'પીળાશવાળા દાંત, વચ્ચે જગ્યા (ડાયસ્ટેમા) અને અસમાન દાંતની ધાર.',
    afterDescription: 'Restored bilateral symmetry, natural translucent pearl shade, closed gap.',
    afterDescriptionGu: 'સંપૂર્ણ સપ્રમાણતા, કુદરતી મોતી જેવી ચમક અને જગ્યાનું સફળ પુરાણ.',
    highlightPoints: ['Zero-prep porcelain laminates', 'Natural shade graduation', 'Restored confidence'],
    highlightPointsGu: ['કુદરતી દાંતને બચાવતા પાતળા લેમિનેટ્સ', 'કુદરતી મોતી જેવો રંગ શેડ', 'આત્મવિશ્વાસપૂર્ણ સ્મિત']
  },
  {
    id: 'implant',
    title: 'Single Tooth Implant',
    titleGu: 'સિંગલ ટૂથ ડેન્ટલ ઇમ્પ્લાન્ટ',
    procedure: 'Titanium Fixture + Custom Zirconia Crown',
    procedureGu: 'ટાઇટેનિયમ ફિક્સ્ચર + કસ્ટમ ઝિર્કોનિયા કેપ',
    timeframe: 'Same-day Placement',
    timeframeGu: 'તે જ દિવસે ફિક્સિંગ',
    beforeDescription: 'Missing maxillary incisor following trauma, bone preservation needed.',
    beforeDescriptionGu: 'આગળનો તૂટી ગયેલો દાંત, હાડકાનું રક્ષણ જરૂરી.',
    afterDescription: 'Seamless gum-level emergence profile, 100% natural bite strength.',
    afterDescriptionGu: 'પેઢા સાથે કુદરતી જોડાણ, ૧૦૦% અસલી દાંત જેવી ચાવવાની ક્ષમતા.',
    highlightPoints: ['Computer-guided surgical stent', 'Metal-free biocompatibility', 'Permanent restoration'],
    highlightPointsGu: ['કોમ્પ્યુટર ગાઇડેડ સચોટ સ્થાપન', 'ધાતુ વગરની બાયો-કમ્પેટીબલ કેપ', 'આજીવન કાયમી પુનઃસ્થાપન']
  },
  {
    id: 'aligners',
    title: 'Invisible Orthodontics',
    titleGu: 'અદ્રશ્ય અલાઈનર્સ (તાર વગર)',
    procedure: 'Clear Dental Aligners',
    procedureGu: 'પારદર્શક કસ્ટમ ડેન્ટલ અલાઈનર્સ',
    timeframe: '8 Months Duration',
    timeframeGu: '૮ મહિનાનો સમયગાળો',
    beforeDescription: 'Lower crowding, overlapping central incisors, rotated lateral.',
    beforeDescriptionGu: 'નીચેના દાંતમાં ગીચતા, આગળ-પાછળ થયેલા દાંત.',
    afterDescription: 'Perfect parabolic dental arch, balanced contact points and bite.',
    afterDescriptionGu: 'એકસરખા સીધા દાંત, સુંદર આકાર અને યોગ્ય બાઇટિંગ.',
    highlightPoints: ['Zero metal wires or brackets', 'Digital 3D simulation', 'Easy oral hygiene'],
    highlightPointsGu: ['ધાતુના વાયર કે પતરી વગર', 'ડિજિટલ ૩D મોડેલિંગ', 'સરળ બ્રશિંગ અને જમવું']
  }
];

export const SmileTransformationSlider: React.FC<{ lang?: Language }> = ({ lang = 'en' }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeCase, setActiveCase] = useState<CaseStudy>(CASES[0]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);

  const t = translations[lang].smileGallery;

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 2), 98);
    setSliderPos(percent);
  }, []);

  const handleMouseDown = () => {
    isDraggingRef.current = true;
  };

  const handleTouchStart = () => {
    isDraggingRef.current = true;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      handleMove(e.clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isDraggingRef.current && e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPos((prev) => Math.max(prev - 5, 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPos((prev) => Math.min(prev + 5, 95));
    }
  };

  const displayTitle = lang === 'gu' ? activeCase.titleGu : activeCase.title;
  const displayProc = lang === 'gu' ? activeCase.procedureGu : activeCase.procedure;
  const displayTimeline = lang === 'gu' ? activeCase.timeframeGu : activeCase.timeframe;
  const displayBeforeDesc = lang === 'gu' ? activeCase.beforeDescriptionGu : activeCase.beforeDescription;
  const displayAfterDesc = lang === 'gu' ? activeCase.afterDescriptionGu : activeCase.afterDescription;
  const displayHighlights = lang === 'gu' ? activeCase.highlightPointsGu : activeCase.highlightPoints;

  return (
    <div className="w-full">
      {/* Case Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {CASES.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setActiveCase(item);
              setSliderPos(50);
            }}
            className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all ${
              activeCase.id === item.id
                ? 'bg-amber-400 text-neutral-950 shadow-sm'
                : 'bg-neutral-900/60 text-neutral-400 hover:text-white border border-white/5'
            }`}
          >
            {lang === 'gu' ? item.titleGu : item.title}
          </button>
        ))}
      </div>

      {/* Main Comparison Interactive Frame */}
      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseUp={handlePointerUp}
        onTouchMove={onTouchMove}
        onTouchEnd={handlePointerUp}
        className="relative w-full max-w-4xl mx-auto aspect-[16/9] min-h-[340px] md:min-h-[420px] rounded-2xl overflow-hidden border border-white/10 select-none cursor-ew-resize bg-neutral-950 shadow-2xl"
        role="slider"
        aria-label="Before and after transformation slider"
        aria-valuenow={Math.round(sliderPos)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {/* AFTER Layer (Full underneath) */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-6 md:p-12">
          <div className="relative w-full max-w-md aspect-[16/10] rounded-xl overflow-hidden border border-amber-400/30 bg-neutral-900/80 flex flex-col items-center justify-center p-6 shadow-inner">
            <div className="relative w-full max-w-[280px] h-32 flex items-center justify-center">
              <svg viewBox="0 0 300 120" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                <path
                  d="M 30,30 Q 150,75 270,30"
                  fill="none"
                  stroke="#e11d48"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.3"
                />
                {[-100, -60, -20, 20, 60, 100].map((offset, i) => (
                  <g key={i} transform={`translate(${150 + offset}, ${50 + Math.abs(offset) * 0.12})`}>
                    <rect
                      x="-14"
                      y="-26"
                      width="28"
                      height="38"
                      rx="6"
                      fill="url(#pearlGrad)"
                      stroke="#f1f5f9"
                      strokeWidth="1.2"
                    />
                    <line x1="-10" y1="8" x2="10" y2="8" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />
                  </g>
                ))}
                <path
                  d="M 40,65 Q 150,115 260,65"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  opacity="0.8"
                />
                <defs>
                  <linearGradient id="pearlGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="70%" stopColor="#f8fafc" />
                    <stop offset="100%" stopColor="#e2e8f0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="mt-4 text-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'gu' ? '૧૦૦% સુંદર સ્મિત પરિણામ' : 'TRANSFORMED: 100% Harmonic Smile'}</span>
              </span>
              <p className="text-xs text-neutral-300 mt-2 max-w-sm">
                {displayAfterDesc}
              </p>
            </div>
          </div>

          <div className="absolute top-4 right-4 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-300">
            {t.afterLabel}
          </div>
        </div>

        {/* BEFORE Layer (Clipped by slider position) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="absolute inset-0 w-full min-w-[340px] md:min-w-[896px] h-full flex items-center justify-center bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-6 md:p-12">
            <div className="relative w-full max-w-md aspect-[16/10] rounded-xl overflow-hidden border border-neutral-700/40 bg-neutral-950/90 flex flex-col items-center justify-center p-6">
              <div className="relative w-full max-w-[280px] h-32 flex items-center justify-center">
                <svg viewBox="0 0 300 120" className="w-full h-full opacity-85">
                  <path
                    d="M 30,30 Q 150,75 270,30"
                    fill="none"
                    stroke="#9f1239"
                    strokeWidth="5"
                    strokeLinecap="round"
                    opacity="0.3"
                  />
                  {[-105, -65, -28, 25, 68, 105].map((offset, i) => {
                    const rot = (i - 2.5) * 4;
                    const yShift = (i % 2 === 0 ? 4 : -3);
                    return (
                      <g key={i} transform={`translate(${150 + offset}, ${50 + yShift}) rotate(${rot})`}>
                        <rect
                          x="-12"
                          y="-24"
                          width="24"
                          height="36"
                          rx="4"
                          fill="url(#stainedGrad)"
                          stroke="#78716c"
                          strokeWidth="1"
                        />
                      </g>
                    );
                  })}
                  <line x1="148" y1="28" x2="148" y2="60" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" />
                  <defs>
                    <linearGradient id="stainedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fef3c7" />
                      <stop offset="60%" stopColor="#fde68a" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-md border border-rose-500/20">
                  {t.beforeLabel}
                </span>
                <p className="text-xs text-neutral-400 mt-2 max-w-sm">
                  {displayBeforeDesc}
                </p>
              </div>
            </div>

            <div className="absolute top-4 left-4 bg-neutral-900/90 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg text-xs font-semibold text-neutral-300">
              {t.beforeLabel}
            </div>
          </div>
        </div>

        {/* Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 via-white to-amber-300 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-neutral-900 border-2 border-amber-400 shadow-xl flex items-center justify-center text-amber-300 pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
          >
            <ArrowLeftRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Case Details Cards */}
      <div className="mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-neutral-900/40 border border-white/5">
          <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">{t.procedure}</span>
          <p className="text-sm font-semibold text-white mt-1">{displayProc}</p>
        </div>
        <div className="p-4 rounded-xl bg-neutral-900/40 border border-white/5">
          <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">{t.timeline}</span>
          <p className="text-sm font-semibold text-amber-300 mt-1">{displayTimeline}</p>
        </div>
        <div className="p-4 rounded-xl bg-neutral-900/40 border border-white/5">
          <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">{t.benefits}</span>
          <ul className="mt-1 space-y-1">
            {displayHighlights.map((point, idx) => (
              <li key={idx} className="flex items-center gap-1.5 text-xs text-neutral-300">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
