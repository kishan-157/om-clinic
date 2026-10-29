import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language, translations } from '../translations';
import { BusinessConfig } from '../config/businessConfig';

interface Props {
  lang: Language;
  config: BusinessConfig;
}

export const ExperienceSection: React.FC<Props> = ({ lang, config }) => {
  const t = translations[lang].experience;
  const trust = translations[lang].trustStrip;

  return (
    <section id="experience" className="py-24 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-700 font-bold">
            {t.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0a2540] mt-3 text-balance">
            {t.title}
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Trust Highlights Strip in Clean White Medical Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          <div className="p-6 rounded-2xl bg-[#f8fafc] border border-sky-100/80 hover:border-sky-300 transition-all flex items-start gap-4 shadow-xs reveal-on-scroll delay-75">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0a2540]">{trust.sterilization}</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{trust.sterilizationDesc}</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#f8fafc] border border-sky-100/80 hover:border-sky-300 transition-all flex items-start gap-4 shadow-xs reveal-on-scroll delay-150">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0b3b60] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0a2540]">{trust.digitalRvg}</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{trust.digitalRvgDesc}</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#f8fafc] border border-sky-100/80 hover:border-sky-300 transition-all flex items-start gap-4 shadow-xs reveal-on-scroll delay-200">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0a2540]">{trust.expertCare}</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{trust.expertCareDesc}</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#f8fafc] border border-sky-100/80 hover:border-sky-300 transition-all flex items-start gap-4 shadow-xs reveal-on-scroll delay-300">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0a2540]">{trust.transparentFees}</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{trust.transparentFeesDesc}</p>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.cards.map((card, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-lg transition-all duration-300 reveal-on-scroll ${
                idx % 2 === 0 ? 'reveal-left' : 'reveal-right'
              }`}
              style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
            >
              <span className="text-[11px] font-mono font-bold tracking-wider text-sky-700 uppercase">
                {lang === 'gu' ? `વિશેષતા ૦${idx + 1}` : `STANDARD 0${idx + 1}`}
              </span>
              <h3 className="text-xl font-bold text-[#0a2540] mt-1.5">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
