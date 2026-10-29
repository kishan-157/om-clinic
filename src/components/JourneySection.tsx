import React from 'react';
import { Scan, ClipboardList, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';
import { Language, translations } from '../translations';

interface Props {
  lang: Language;
  onOpenBooking: () => void;
}

export const JourneySection: React.FC<Props> = ({ lang, onOpenBooking }) => {
  const t = translations[lang].journey;
  const icons = [Scan, ClipboardList, Sparkles, HeartHandshake];

  return (
    <section className="py-24 bg-white relative border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-700">
            {t.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0a2540] mt-3 text-balance">
            {t.title}
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 4-Step Journey Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.steps.map((step, idx) => {
            const IconComp = icons[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="group p-7 rounded-2xl bg-[#f8fafc] border border-sky-100/80 hover:border-sky-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between reveal-on-scroll"
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-mono text-sky-600">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-sky-100 text-[#0b3b60] flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0a2540] group-hover:text-sky-700 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-600 mt-3 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-bold text-sky-700">
                  <span>{lang === 'gu' ? `પગલું ૦${idx + 1}` : `Phase 0${idx + 1}`}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Trigger */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0b3b60] hover:bg-[#082d49] text-white font-bold text-sm shadow-md shadow-sky-900/15 transition-all active:scale-95 cursor-pointer"
          >
            <span>{translations[lang].hero.bookCta}</span>
            <ArrowRight className="w-4 h-4 text-sky-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
