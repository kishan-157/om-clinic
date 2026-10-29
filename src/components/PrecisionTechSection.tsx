import React from 'react';
import { HeartHandshake, Scan, Sparkles, Cpu, ShieldCheck, Check } from 'lucide-react';
import { BusinessConfig } from '../config/businessConfig';
import { SmileTransformationSlider } from './SmileTransformationSlider';
import { Language, translations } from '../translations';

interface Props {
  config: BusinessConfig;
  lang: Language;
}

export const PrecisionTechSection: React.FC<Props> = ({ config, lang }) => {
  const t = translations[lang].tech;
  const sg = translations[lang].smileGallery;

  const pillarIcons = [HeartHandshake, Scan, Sparkles];
  const equipmentIcons = [Scan, Cpu, ShieldCheck];

  return (
    <section id="precision-tech" className="py-24 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-700">
            {t.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0a2540] mt-3 text-balance">
            {t.title}
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-3 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Clinical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {t.pillars.map((pillar, idx) => {
            const IconComponent = pillarIcons[idx] || Sparkles;

            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#f8fafc] border border-sky-100 hover:border-sky-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between reveal-on-scroll"
                style={{ transitionDelay: `${(idx + 1) * 120}ms` }}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-sky-100 text-[#0b3b60] flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-sky-700 uppercase">
                    {lang === 'gu' ? `સ્તંભ ૦${idx + 1}` : `PILLAR 0${idx + 1}`}
                  </span>
                  <h3 className="text-2xl font-bold text-[#0a2540] mt-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-sky-800 font-semibold mt-1">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>{lang === 'gu' ? 'પ્રમાણિત ક્લિનિકલ સ્ટાન્ડર્ડ' : 'Standard Clinical Protocol'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Smile Transformation Showcase */}
        <div id="smile-gallery" className="pt-10 border-t border-slate-100 reveal-scale">
          <div className="text-center max-w-2xl mx-auto mb-10 reveal-on-scroll">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-700">
              {sg.kicker}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540] mt-2">
              {sg.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {sg.subtitle}
            </p>
          </div>

          <SmileTransformationSlider lang={lang} />
        </div>

        {/* Technology Bento Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.equipment.map((item, eqIdx) => {
            const EqIcon = equipmentIcons[eqIdx] || Scan;
            return (
              <div
                key={eqIdx}
                className="p-7 rounded-2xl bg-[#f8fafc] border border-sky-100 hover:border-sky-300 transition-all reveal-on-scroll"
                style={{ transitionDelay: `${(eqIdx + 1) * 120}ms` }}
              >
                <div className="p-3 w-fit rounded-xl bg-white text-sky-700 border border-sky-200 shadow-xs mb-4">
                  <EqIcon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#0a2540]">{item.title}</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
