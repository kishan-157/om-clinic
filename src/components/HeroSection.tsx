import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, MessageCircle, ShieldCheck, Sparkles, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { BusinessConfig, buildWhatsAppLink } from '../config/businessConfig';
import { HolographicToothCanvas } from './HolographicToothCanvas';
import { Language, translations } from '../translations';

interface Props {
  config: BusinessConfig;
  lang: Language;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<Props> = ({ config, lang, onOpenBooking }) => {
  const t = translations[lang].hero;
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: t.slide1Title,
      highlight: t.slide1Highlight,
      subtitle: t.slide1Subtitle
    },
    {
      title: t.slide2Title,
      highlight: t.slide2Highlight,
      subtitle: t.slide2Subtitle
    },
    {
      title: t.slide3Title,
      highlight: t.slide3Highlight,
      subtitle: t.slide3Subtitle
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const activeSlideData = slides[currentSlide];

  const quickEnquiryUrl = buildWhatsAppLink(
    config.whatsappNumber,
    lang === 'gu'
      ? `નમસ્તે ડૉ. હર્ષ અને ઓમ ડેન્ટલ ક્લિનિક ટીમ, મારે નિકોલ ક્લિનિકમાં દાંતની સારવાર અંગે માહિતી મેળવવી છે.`
      : `Hello Dr. Harsh & Om Dental team, I would like to enquire about dental treatments at your Nikol clinic.`
  );

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center bg-gradient-to-br from-[#f8fafc] via-[#f0f7fc] to-[#e6f4fe] overflow-hidden pt-8 pb-16 border-b border-sky-100">
      {/* Background Soft Glow Circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-200/50 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-200/40 blur-[140px] rounded-full pointer-events-none" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0b3b60 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 my-auto">
        {/* Main 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition, Slider & Copy */}
          <div className="lg:col-span-7 space-y-6 reveal-left is-visible">
            {/* Kicker Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 text-xs text-sky-900 font-bold shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{lang === 'gu' ? config.businessNameGu : config.businessName}</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-600">{lang === 'gu' ? 'નિકોલ, અમદાવાદ' : 'Nikol, Ahmedabad'}</span>
            </div>

            {/* Dynamic Headline matching thedentalwellnesscentre.in */}
            <div className="min-h-[140px] sm:min-h-[160px] flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0a2540] leading-[1.08] text-balance">
                {activeSlideData.title}{' '}
                <span className="text-sky-600 underline decoration-sky-300 decoration-wavy decoration-2">
                  {activeSlideData.highlight}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl font-normal leading-relaxed">
                {activeSlideData.subtitle}
              </p>
            </div>

            {/* Slide Navigation Dots */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-1.5">
                {slides.map((_, sIdx) => (
                  <button
                    key={sIdx}
                    type="button"
                    onClick={() => setCurrentSlide(sIdx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      currentSlide === sIdx ? 'w-8 bg-sky-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${sIdx + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-1 ml-2">
                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-800 hover:bg-white transition-colors cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-800 hover:bg-white transition-colors cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons (Reel button removed per user instruction) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0b3b60] hover:bg-[#082d49] text-white font-bold text-sm md:text-base shadow-lg shadow-sky-900/20 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
              >
                <span>{t.bookCta}</span>
                <ArrowRight className="w-4 h-4 text-sky-300" />
              </button>

              <a
                href={quickEnquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm md:text-base shadow-md shadow-emerald-700/15 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.whatsappCta}</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 border-t border-sky-200/60 flex flex-wrap items-center gap-5 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{lang === 'gu' ? '૧૦૦% સ્ટરિલાઇઝ્ડ ઓટોક્લેવ' : 'Class-B Autoclave Sterilization'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{lang === 'gu' ? 'સિંગલ-સીટિંગ રોટરી RCT' : 'Rotary Endodontics & RVG'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'gu' ? 'પ્રમાણિત ડેન્ટલ સર્જન' : 'Certified Dental Specialists'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Realistic Dental Anatomy Visualizer */}
          <div className="lg:col-span-5 flex justify-center reveal-right is-visible">
            <div className="w-full max-w-md rounded-2xl overflow-hidden border border-sky-200/80 bg-white shadow-xl relative">
              <HolographicToothCanvas lang={lang} />
            </div>
          </div>
        </div>

        {/* 4-Column Clinical KPI Strip in Light Cards */}
        <div className="mt-16 pt-8 border-t border-sky-200/60 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-white border border-sky-100 shadow-xs">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0b3b60] font-mono tabular-nums">
              {t.quickStats.experience}
            </span>
            <span className="block text-xs font-bold text-sky-700 mt-1">
              {lang === 'gu' ? 'અનુભવી ક્લિનિકલ સેવા' : 'Years Clinical Excellence'}
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5 block">
              {t.quickStats.experienceLabel}
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-sky-100 shadow-xs">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0b3b60] font-mono tabular-nums">
              {t.quickStats.patients}
            </span>
            <span className="block text-xs font-bold text-sky-700 mt-1">
              {lang === 'gu' ? 'સ્વસ્થ દર્દીઓ' : 'Happy Smiles Restored'}
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5 block">
              {t.quickStats.patientsLabel}
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-sky-100 shadow-xs">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0b3b60] font-mono tabular-nums">
              {t.quickStats.success}
            </span>
            <span className="block text-xs font-bold text-sky-700 mt-1">
              {lang === 'gu' ? 'ઇમ્પ્લાન્ટ સફળતા દર' : 'Implant Success Rate'}
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5 block">
              {t.quickStats.successLabel}
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-sky-100 shadow-xs">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0b3b60] font-mono tabular-nums">
              {t.quickStats.singleSitting}
            </span>
            <span className="block text-xs font-bold text-sky-700 mt-1">
              {lang === 'gu' ? 'દર્દરહિત સારવાર' : 'Single-Sitting Rotary RCT'}
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5 block">
              {t.quickStats.singleSittingLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
